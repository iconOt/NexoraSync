import { useState, useEffect, useCallback } from "react";
import AuthContext from "../context/AuthContext";
import insforge from "../lib/insforge";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const enrichUser = async (authUser) => {
    if (!authUser) return null;
    try {
      const { data: profile } = await insforge.auth.getProfile(authUser.id);
      return {
        ...authUser,
        profile: { ...authUser.profile, ...profile },
      };
    } catch {
      return authUser;
    }
  };

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      try {
        const { data } = await insforge.auth.getCurrentUser();
        if (!cancelled) {
          if (data?.user) {
            const enriched = await enrichUser(data.user);
            setUser(enriched);
          }
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    };
    init();
    return () => { cancelled = true; };
  }, []);

  const signup = useCallback(async (userData) => {
    const { data, error } = await insforge.auth.signUp({
      email: userData.email,
      password: userData.password,
      name: userData.name,
    });
    if (error) throw error;

    if (data?.requireEmailVerification) {
      return { requireEmailVerification: true, user: data?.user };
    }

    if (data?.user) {
      await insforge.auth.setProfile({ name: userData.name, role: userData.role });
      const enriched = await enrichUser(data.user);
      setUser(enriched);
    }
    return data;
  }, []);

  const login = useCallback(async (email, password) => {
    const { data, error } = await insforge.auth.signInWithPassword({ email, password });
    if (error) throw error;
    if (data?.user) {
      const enriched = await enrichUser(data.user);
      setUser(enriched);
    }
    return data;
  }, []);

  const logout = useCallback(async () => {
    await insforge.auth.signOut();
    setUser(null);
  }, []);

  const setAuthUser = useCallback((userData) => {
    setUser(userData);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
