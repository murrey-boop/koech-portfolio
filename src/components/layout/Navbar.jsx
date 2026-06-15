import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 dark:text-indigo-400 font-semibold"
      : "hover:text-indigo-600 dark:hover:text-indigo-400 transition";

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="font-bold text-xl"
          >
            Josphat Koech Words
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            <NavLink
              to="/services"
              className={navClass}
            >
              Services
            </NavLink>

            <NavLink
              to="/portfolio"
              className={navClass}
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/blog"
              className={navClass}
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
            >
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}