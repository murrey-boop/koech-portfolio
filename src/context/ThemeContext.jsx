import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.setProperty("--bg-main", "#1a1210");
      root.style.setProperty("--bg-card", "#241a17");
      root.style.setProperty("--color-ink", "#f5ede8");
      root.style.setProperty("--color-ink-soft", "#c9b5ae");
      root.style.setProperty("--border-color", "#3d2a24");
      root.style.setProperty("--navbar-bg", "rgba(26,18,16,0.85)");
      root.classList.add("dark");
    } else {
      root.style.setProperty("--bg-main", "#fff7f1");
      root.style.setProperty("--bg-card", "#fffdf9");
      root.style.setProperty("--color-ink", "#33292b");
      root.style.setProperty("--color-ink-soft", "#6b5d5f");
      root.style.setProperty("--border-color", "#f4d9d0");
      root.style.setProperty("--navbar-bg", "rgba(255,247,241,0.85)");
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);