import useTheme from "../hooks/useTheme";
import { MdModeNight, MdSunny } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-slate-300 dark:bg-slate-600 transition-colors duration-300 flex items-center px-1 cursor-pointer"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {theme === "light" ? (
          <MdModeNight size={12} className="text-slate-700" />
        ) : (
          <MdSunny size={12} className="text-yellow-500" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
