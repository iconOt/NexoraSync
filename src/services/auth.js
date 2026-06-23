import insforge from "../lib/insforge";

export const getUser = async () => {
  const { data } = await insforge.auth.getCurrentUser();
  return { user: data?.user || null };
};

export const logout = async () => {
  await insforge.auth.signOut();
  return true;
};
