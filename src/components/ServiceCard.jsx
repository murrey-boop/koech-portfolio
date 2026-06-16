import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, to = "/services" }) {
  return (
    <div style={{padding:32, borderRadius:16, background:"var(--navbar-bg)", border:"1px solid #f4d9d0", transition:"box-shadow 0.2s"}}
      onMouseEnter={e => e.currentTarget.style.boxShadow="0 4px 24px rgba(0,0,0,0.08)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow="none"}
    >
      <h3 style={{fontFamily:"'Playfair Display',Georgia,serif", fontSize:"1.35rem", marginBottom:12, color:"var(--color-ink)"}}>{title}</h3>
      <p style={{color:"var(--color-ink-soft)", marginBottom:20, lineHeight:1.7}}>{description}</p>
      <Link to={to} style={{color:"var(--accent-color)", fontWeight:600, textDecoration:"none"}}>Learn more →</Link>
    </div>
  );
}
