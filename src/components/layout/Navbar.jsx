import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Blog", "/blog"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkStyle = (isActive) => ({
    color: isActive ? "#c97d60" : "var(--color-ink)",
    fontWeight: isActive ? 700 : 500,
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.2s",
  });

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        backdropFilter: "blur(10px)",
        background: "var(--navbar-bg)",
        borderBottom: "1px solid var(--border-color)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 68 }}>

            {/* Logo */}
            <Link to="/" style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "1.3rem", fontWeight: 700,
              color: "var(--color-ink)", textDecoration: "none",
              flexShrink: 0,
            }}>
              Josphat Koech
            </Link>

            {/* Desktop nav */}
            <nav style={{ display: "flex", alignItems: "center", gap: 28 }}
              className="desktop-nav">
              {links.map(([label, path]) => (
                <NavLink key={path} to={path} end={path === "/"} style={({ isActive }) => linkStyle(isActive)}
                  onMouseEnter={e => { if (e.target.style.color !== "#c97d60") e.target.style.color = "#c97d60"; }}
                  onMouseLeave={e => { if (e.target.style.fontWeight !== "700") e.target.style.color = "var(--color-ink)"; }}
                >
                  {label}
                </NavLink>
              ))}
              <Link to="/contact" style={{
                padding: "9px 22px", borderRadius: 999,
                background: "#c97d60", color: "#fff",
                fontWeight: 600, textDecoration: "none", fontSize: "0.9rem",
                transition: "background 0.2s", flexShrink: 0,
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#a8593f"}
                onMouseLeave={e => e.currentTarget.style.background = "#c97d60"}
              >
                Contact
              </Link>
            </nav>

            {/* Right side: theme + hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <ThemeToggle />

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setOpen(o => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                className="hamburger-btn"
                style={{
                  display: "none", flexDirection: "column",
                  justifyContent: "center", alignItems: "center",
                  gap: 5, width: 40, height: 40,
                  background: "transparent", border: "none",
                  cursor: "pointer", padding: 4, borderRadius: 8,
                }}
              >
                <span style={{
                  display: "block", width: 22, height: 2,
                  background: "var(--color-ink)", borderRadius: 2,
                  transform: open ? "translateY(7px) rotate(45deg)" : "none",
                  transition: "all 0.25s",
                }} />
                <span style={{
                  display: "block", width: 22, height: 2,
                  background: "var(--color-ink)", borderRadius: 2,
                  opacity: open ? 0 : 1,
                  transition: "all 0.25s",
                }} />
                <span style={{
                  display: "block", width: 22, height: 2,
                  background: "var(--color-ink)", borderRadius: 2,
                  transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
                  transition: "all 0.25s",
                }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 99,
        background: "rgba(33,20,18,0.4)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.25s",
      }} onClick={() => setOpen(false)} />

      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 100,
        width: "min(300px, 85vw)",
        background: "var(--bg-card)",
        borderLeft: "1px solid var(--border-color)",
        padding: "80px 32px 40px",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column", gap: 8,
      }}>
        {links.map(([label, path]) => (
          <NavLink key={path} to={path} end={path === "/"}
            style={({ isActive }) => ({
              ...linkStyle(isActive),
              fontSize: "1.2rem", padding: "10px 0",
              borderBottom: "1px solid var(--border-color)",
              display: "block",
            })}>
            {label}
          </NavLink>
        ))}
        <Link to="/contact" style={{
          marginTop: 16, padding: "14px 0", borderRadius: 999,
          background: "#c97d60", color: "#fff", fontWeight: 600,
          textDecoration: "none", fontSize: "1rem",
          textAlign: "center", display: "block",
        }}>
          Contact →
        </Link>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
