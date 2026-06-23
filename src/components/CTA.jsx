import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section style={{padding:"96px 24px", textAlign:"center"}}>
      <div style={{maxWidth:700, margin:"0 auto"}}>
        <h2 style={{fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(1.8rem,3vw,2.8rem)", color:"var(--color-ink)", marginBottom:20}}>
          Let's get your content sorted
        </h2>
        <p style={{color:"var(--color-ink-soft)", fontSize:"1.1rem", marginBottom:32}}>
          Tell me what you're working on and I'll get back to you as soon as possible.
        </p>
        <Link to="/contact" style={{display:"inline-flex", alignItems:"center", gap:8, padding:"12px 28px", borderRadius:"999px", background:"#c97d60", color:"#fff", fontWeight:600, textDecoration:"none", fontSize:"1rem"}}>
          Start a Project →
        </Link>
      </div>
    </section>
  );
}
