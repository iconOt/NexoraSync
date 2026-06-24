import { useEffect, useState } from "react";
import DashboardLayout from "../layout/dashboard";
import DashboardNavbar from "../components/dashboardnavbar";
import StatCard from "../components/statcard";
import { DollarSign, Users, TrendingUp, ShoppingCart, FolderKanban, CheckCircle } from "lucide-react";
import { getProjectCounts } from "../services/dashboard";

const DashboardTwo = () => {
  const [counts, setCounts] = useState(null);

  useEffect(() => {
    getProjectCounts().then(setCounts);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Analytics Dashboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Track your business performance and key metrics.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard title="Sales Growth" value="+24%" icon={<TrendingUp size={20} />} trend="+5%" trendUp />
        <StatCard title="Visitors" value="18,540" icon={<Users size={20} />} trend="+12%" trendUp />
        <StatCard title="Projects" value={String(counts?.total || 0)} icon={<FolderKanban size={20} />} trend={String(counts?.active || 0)} trendUp />
        <StatCard title="Completed Tasks" value={String(counts?.completed || 0)} icon={<CheckCircle size={20} />} trend="+2" trendUp />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Traffic Sources
          </h2>
          <div className="space-y-4">
            {[
              { source: "Direct", percentage: 40, color: "bg-blue-600" },
              { source: "Organic Search", percentage: 25, color: "bg-green-500" },
              { source: "Social Media", percentage: 20, color: "bg-purple-500" },
              { source: "Referral", percentage: 10, color: "bg-yellow-500" },
              { source: "Email", percentage: 5, color: "bg-sky-500" },
            ].map((item) => (
              <div key={item.source}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700 dark:text-slate-200">{item.source}</span>
                  <span className="text-slate-500 dark:text-slate-400">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Weekly Performance
          </h2>
          <div className="space-y-4">
            {[
              { label: "Mon", value: 85 },
              { label: "Tue", value: 92 },
              { label: "Wed", value: 78 },
              { label: "Thu", value: 95 },
              { label: "Fri", value: 88 },
              { label: "Sat", value: 70 },
              { label: "Sun", value: 65 },
            ].map((day) => (
              <div key={day.label} className="flex items-center gap-3">
                <span className="w-8 text-sm text-slate-600 dark:text-slate-300 font-medium">
                  {day.label}
                </span>
                <div className="flex-1 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all"
                    style={{ width: `${day.value}%` }}
                  />
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 w-8 text-right">
                  {day.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          Summary
        </h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Your platform is showing strong growth this quarter. Visitor numbers are up 12% 
          compared to last month, and the conversion rate has improved by 2.1 percentage points. 
          Focus on maintaining the momentum in direct and organic channels for continued growth.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default DashboardTwo;
