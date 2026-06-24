import { useState } from "react";
import Sidebar from "../components/sidebar";
import { Menu } from "lucide-react";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white dark:bg-slate-800 p-2 rounded-lg shadow dark:shadow-slate-900/50"
        aria-label="Toggle sidebar"
      >
        <Menu size={20} className="text-slate-900 dark:text-white" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static z-40 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden z-30"
        />
      )}

      {/* Main content */}
      <main className="flex-1 md:ml-64 p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
