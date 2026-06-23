import insforge from "../lib/insforge";

export const getDashboardStats = async (userId) => {
  const [projectsRes, tasksRes, activitiesRes, teamRes, usersRes] = await Promise.all([
    insforge.database.from("projects").select("*", { count: "exact" }),
    insforge.database.from("tasks").select("*", { count: "exact" }),
    insforge.database.from("activities").select("*").order("created_at", { ascending: false }).limit(10),
    insforge.database.from("team_members").select("*"),
    insforge.database.from("projects").select("*", { count: "exact" }).eq("user_id", userId),
  ]);

  const activeProjects = projectsRes.data?.filter((p) => p.status === "active") || [];
  const completedTasks = tasksRes.data?.filter((t) => t.status === "completed") || [];

  return {
    totalUsers: usersRes.count || 0,
    activeProjects: activeProjects.length,
    totalProjects: projectsRes.count || 0,
    completedTasks: completedTasks.length,
    activities: activitiesRes.data || [],
    teamMembers: teamRes.data || [],
    projects: projectsRes.data || [],
  };
};

export const getProjectCounts = async () => {
  const { data } = await insforge.database.from("projects").select("status");
  const total = data?.length || 0;
  const active = data?.filter((p) => p.status === "active").length || 0;
  const completed = data?.filter((p) => p.status === "completed").length || 0;
  return { total, active, completed };
};
