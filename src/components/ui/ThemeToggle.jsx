import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        border: "1px solid #f4d9d0",
        background: theme === "dark" ? "#3d2a24" : "#fffdf9",
        color: theme === "dark" ? "#f5ede8" : "#a8593f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "all 0.2s",
        flexShrink: 0,
      }}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}