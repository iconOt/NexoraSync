import insforge from "../lib/insforge";

export const createProject = async (userId, name) => {
  return await insforge.database
    .from("projects")
    .insert([{ user_id: userId, name }])
    .select();
};

export const getProjects = async (userId) => {
  return await insforge.database
    .from("projects")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
};

export const deleteProject = async (id) => {
  return await insforge.database
    .from("projects")
    .delete()
    .eq("id", id);
};

export const updateProjectStatus = async (id, status) => {
  return await insforge.database
    .from("projects")
    .update({ status })
    .eq("id", id)
    .select();
};
