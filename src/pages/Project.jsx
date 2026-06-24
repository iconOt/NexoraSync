import { useEffect, useState } from "react";
import DashboardLayout from "../layout/dashboard";
import DashboardNavbar from "../components/dashboardnavbar";
import useAuth from "../hooks/useAuth";
import { createProject, getProjects, deleteProject, updateProjectStatus } from "../services/projects";
import { Plus, Trash2, CheckCircle, Clock } from "lucide-react";

const Projects = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const fetchProjects = async () => {
    if (!user) return;
    const { data } = await getProjects(user.id);
    setProjects(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, [user]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newName.trim() || !user) return;
    await createProject(user.id, newName.trim());
    setNewName("");
    setShowForm(false);
    fetchProjects();
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    fetchProjects();
  };

  const handleToggleStatus = async (project) => {
    const newStatus = project.status === "active" ? "completed" : "active";
    await updateProjectStatus(project.id, newStatus);
    fetchProjects();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus size={18} /> New Project
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="mb-6 flex gap-3">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Project name..."
            className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create
          </button>
        </form>
      )}

      {loading ? (
        <p className="text-slate-500">Loading projects...</p>
      ) : projects.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-sm">
          <p className="text-slate-500 dark:text-slate-400">No projects yet. Create your first one!</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  project.status === "active"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Created {new Date(project.created_at).toLocaleDateString()}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleToggleStatus(project)}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition"
                >
                  {project.status === "active" ? <CheckCircle size={14} /> : <Clock size={14} />}
                  {project.status === "active" ? "Complete" : "Reopen"}
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition"
                >
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Projects;
