import { useEffect, useState } from "react";
import DashboardLayout from "../layout/dashboard";
import DashboardNavbar from "../components/DashboardNavbar";
import StatCard from "../components/StatCard";
import { DollarSign, Users, FolderKanban, CheckCircle } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { getDashboardStats } from "../services/dashboard";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const DashboardOne = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getDashboardStats(user.id).then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, [user]);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome back, {user?.profile?.name || "User"} 👋
        </h1>
        <p className="text-slate-500 mt-1">Here&apos;s what&apos;s happening today.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value={loading ? "..." : String(stats?.totalUsers || 0)}
          icon={<Users size={20} />}
          trend="+12%"
          trendUp
        />
        <StatCard
          title="Revenue"
          value="$12,540"
          icon={<DollarSign size={20} />}
          trend="+8%"
          trendUp
        />
        <StatCard
          title="Active Projects"
          value={loading ? "..." : String(stats?.activeProjects || 0)}
          icon={<FolderKanban size={20} />}
          trend={loading ? "" : `+${stats?.activeProjects || 0}`}
          trendUp
        />
        <StatCard
          title="Completed Tasks"
          value={loading ? "..." : String(stats?.completedTasks || 0)}
          icon={<CheckCircle size={20} />}
          trend={loading ? "" : String(stats?.completedTasks || 0)}
          trendUp
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            All Projects ({stats?.totalProjects || 0})
          </h2>
          <div className="space-y-3">
            {loading ? (
              <p className="text-slate-500">Loading...</p>
            ) : stats?.projects?.length === 0 ? (
              <p className="text-slate-500">No projects yet.</p>
            ) : (
              stats?.projects?.slice(0, 6).map((project) => (
                <div key={project.id} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700 last:border-0">
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{project.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    project.status === "active"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : project.status === "completed"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {loading ? (
              <p className="text-slate-500">Loading...</p>
            ) : stats?.activities?.length === 0 ? (
              <p className="text-slate-500">No recent activity.</p>
            ) : (
              stats?.activities?.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <div className="flex-1">
                    <p className="text-sm text-slate-700 dark:text-slate-200">{item.action}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {new Date(item.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Team Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="pb-3 text-sm font-medium text-slate-500 dark:text-slate-400">Name</th>
                <th className="pb-3 text-sm font-medium text-slate-500 dark:text-slate-400">Role</th>
                <th className="pb-3 text-sm font-medium text-slate-500 dark:text-slate-400">Status</th>
                <th className="pb-3 text-sm font-medium text-slate-500 dark:text-slate-400">Tasks</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} className="py-4 text-sm text-slate-500">Loading...</td></tr>
              ) : stats?.teamMembers?.length === 0 ? (
                <tr><td colSpan={4} className="py-4 text-sm text-slate-500">No team members.</td></tr>
              ) : (
                stats?.teamMembers?.map((member) => (
                  <tr key={member.id} className="border-b border-slate-100 dark:border-slate-700/50">
                    <td className="py-3 text-sm text-slate-900 dark:text-white">{member.name}</td>
                    <td className="py-3 text-sm text-slate-600 dark:text-slate-300">{member.role}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        member.status === "Active"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-slate-600 dark:text-slate-300">{member.tasks}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardOne;
