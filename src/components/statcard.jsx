const StatCard = ({ title, value, icon, trend, trendUp }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-slate-800/50 transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</p>
        {icon && (
          <span className="text-slate-400 dark:text-slate-500">{icon}</span>
        )}
      </div>
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {value}
        </h2>
        {trend && (
          <span className={`text-sm font-medium flex items-center gap-1 ${
            trendUp ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          }`}>
            {trendUp ? <TrendUp size={14} /> : <TrendDown size={14} />}
            {trend}
          </span>
        )}
      </div>
    </div>
  );
};

const TrendUp = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const TrendDown = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
);

export default StatCard;
