import { Bell, Search, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import umar from "../assets/images/umar.jpeg";
import ThemeToggle from "./ThemeToggle";
import useAuth from "../hooks/useAuth";

const DashboardNavbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 flex justify-between items-center mb-6">
      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-lg w-80">
        <Search size={18} className="text-gray-500 dark:text-gray-300" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full dark:text-white placeholder-gray-400"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={22} className="text-gray-700 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <ThemeToggle />

        <div className="flex items-center gap-3">
          <img src={umar} alt="profile" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-sm dark:text-white leading-tight">
              {user?.profile?.name || "Umar Faruq"}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user?.profile?.role || "Developer"}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
          title="Logout"
        >
          <LogOut size={18} />
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
