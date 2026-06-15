import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
      p-2
      rounded-full
      border
      border-slate-300
      dark:border-slate-700
      hover:scale-110
      transition
      "
    >
      {theme === "light" ? (
        <FaMoon />
      ) : (
        <FaSun />
      )}
    </button>
  );
}