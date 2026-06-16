export default function BlogCard({ post }) {
  return (
    <article style={{
      borderRadius: 16, overflow: "hidden",
      border: "1px solid var(--border-color)",
      background: "var(--bg-card)",
      display: "flex", flexDirection: "column",
      transition: "box-shadow 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 32px rgba(0,0,0,0.09)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
    >
      <img
        src={post.image}
        alt={post.title}
        style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <span style={{
            fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.08em", color: "#c97d60",
            background: "#f4d9d030", padding: "3px 10px", borderRadius: 999,
            border: "1px solid #f4d9d0"
          }}>{post.category}</span>
          <span style={{ fontSize: "0.8rem", color: "var(--color-ink-soft)" }}>{post.readTime}</span>
        </div>
        <h3 style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          fontSize: "1.2rem", color: "var(--color-ink)",
          margin: "0 0 10px", lineHeight: 1.4
        }}>{post.title}</h3>
        <p style={{ color: "var(--color-ink-soft)", fontSize: "0.95rem", lineHeight: 1.7, margin: "0 0 20px", flex: 1 }}>
          {post.excerpt}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--color-ink-soft)" }}>{post.date}</span>
          <a href={`/blog/${post.slug}`} style={{
            color: "#a8593f", fontWeight: 600, fontSize: "0.9rem",
            textDecoration: "none"
          }}>Read more →</a>
        </div>
      </div>
    </article>
  );
}
