export default function PortfolioCard({ project }) {
  return (
    <div style={{
      overflow: "hidden", borderRadius: 16,
      border: "1px solid var(--border-color)",
      background: "var(--bg-card)",
      display: "flex", flexDirection: "column",
      transition: "box-shadow 0.2s, transform 0.2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 36px rgba(0,0,0,0.10)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
        />
        <span style={{
          position: "absolute", top: 14, right: 14,
          background: "rgba(255,253,249,0.92)", backdropFilter: "blur(4px)",
          border: "1px solid #f4d9d0", borderRadius: 999,
          padding: "4px 12px", fontSize: "0.75rem",
          fontWeight: 700, color: "#a8593f",
        }}>
          {project.count}
        </span>
      </div>

      <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{
          fontSize: "0.73rem", fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.1em", color: "#c97d60", margin: "0 0 8px",
        }}>
          {project.category}
        </p>
        <h3 style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          fontSize: "1.25rem", color: "var(--color-ink)",
          margin: "0 0 12px", lineHeight: 1.3,
        }}>
          {project.title}
        </h3>
        <p style={{
          color: "var(--color-ink-soft)", fontSize: "0.9rem",
          lineHeight: 1.7, margin: "0 0 20px", flex: 1,
        }}>
          {project.description}
        </p>

        {/* Sample links */}
        <div>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--color-ink)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Read samples →
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.samples.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{
                  padding: "5px 14px", borderRadius: 999, fontSize: "0.8rem",
                  border: "1px solid var(--border-color)",
                  color: "var(--color-ink-soft)", textDecoration: "none",
                  background: "var(--bg-main)", transition: "all 0.2s",
                  fontWeight: 500,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#c97d60"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#c97d60"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--bg-main)"; e.currentTarget.style.color = "var(--color-ink-soft)"; e.currentTarget.style.borderColor = "var(--border-color)"; }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
