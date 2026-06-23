import {
  FolderKanban,
  Users,
  BarChart3,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FolderKanban size={32} />,
      title: "Project Management",
      description:
        "Organize tasks, manage projects, and keep everything on track from one place.",
    },
    {
      icon: <Users size={32} />,
      title: "Team Collaboration",
      description:
        "Work together efficiently with shared workspaces and team-focused tools.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics Dashboard",
      description:
        "Monitor key metrics and gain insights through a clean analytics interface.",
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Performance",
      description:
        "Lightning-fast load times and real-time updates to keep your team in sync.",
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and role-based access controls to protect your data.",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Access",
      description:
        "Access your workspace from anywhere with seamless multi-device support.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Everything You Need
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Powerful features to manage your team and projects effectively.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-slate-800/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
