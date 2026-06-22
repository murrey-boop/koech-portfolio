import { useState } from "react";
import { Link } from "react-router-dom";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus("error"); return; }
    setStatus("success");
    setEmail("");
  };

  return (
    <div>
      <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "1.3rem", color: "var(--color-ink)", margin: "0 0 8px" }}>Unhinged Words</h3>
      <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, margin: "0 0 20px", fontSize: "0.9rem" }}>
        Freelance content writer, editor & blogger.<br />Words that inform, inspire, and convert.
      </p>
      <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--color-ink)", margin: "0 0 6px" }}>Get writing tips in your inbox</p>
      <p style={{ color: "var(--color-ink-soft)", fontSize: "0.82rem", margin: "0 0 12px" }}>Occasional insights on writing, content strategy, and the freelance life.</p>
      {status === "success" ? (
        <p style={{ color: "#065f46", background: "#d1fae5", padding: "10px 16px", borderRadius: 10, fontSize: "0.875rem", fontWeight: 500 }}>✅ You're subscribed! Welcome aboard.</p>
      ) : (
        <>
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <input type="email" value={email} onChange={e => { setEmail(e.target.value); setStatus(null); }} placeholder="your@email.com"
              style={{ flex: 1, minWidth: 160, padding: "10px 14px", borderRadius: 999, border: `1px solid ${status === "error" ? "#e05c3a" : "#e4d7cf"}`, fontFamily: "inherit", fontSize: "0.875rem", color: "var(--color-ink)", background: "var(--bg-card)", outline: "none" }} />
            <button type="submit" style={{ padding: "10px 18px", borderRadius: 999, border: "none", background: "#c97d60", color: "#fff", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", whiteSpace: "nowrap" }}>Subscribe →</button>
          </form>
          {status === "error" && <p style={{ color: "#e05c3a", fontSize: "0.78rem", margin: "5px 0 0" }}>Please enter a valid email.</p>}
        </>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-color)", marginTop: 80, background: "var(--bg-card)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px,6vw,64px) 24px 32px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "clamp(24px,4vw,48px)", marginBottom: 40 }}>
          <NewsletterSignup />
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ink)", margin: "0 0 16px" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[["About","/about"],["Services","/services"],["Portfolio","/portfolio"],["Blog","/blog"],["Contact","/contact"]].map(([l,p]) => (
                <Link key={p} to={p} style={{ color: "var(--color-ink-soft)", textDecoration: "none", fontSize: "0.9rem" }}
                  onMouseEnter={e => e.target.style.color = "#c97d60"}
                  onMouseLeave={e => e.target.style.color = "var(--color-ink-soft)"}
                >{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ink)", margin: "0 0 16px" }}>Connect</h4>
            <div style={{ display: "grid", gap: 10, marginBottom: 16 }}>
              <a href="mailto:josphat@koechwords.com" style={{ color: "var(--color-ink-soft)", textDecoration: "none", fontSize: "0.9rem" }}>Email: josphat@koechwords.com</a>
              <Link to="/contact" style={{ color: "var(--color-ink-soft)", textDecoration: "none", fontSize: "0.9rem" }}>Use the contact form</Link>
            </div>
            <p style={{ color: "var(--color-ink-soft)", fontSize: "0.82rem", lineHeight: 1.6 }}>Based in Nairobi, Kenya.<br />Available for remote projects worldwide.</p>
          </div>
        </div>

        <div style={{ paddingTop: 24, borderTop: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "var(--color-ink-soft)", fontSize: "0.82rem", margin: 0 }}>© {new Date().getFullYear()} Unhinged Words. All Rights Reserved.</p>
          <button onClick={() => window.scrollTo({top:0,behavior:"smooth"})}
            style={{ display:"flex",alignItems:"center",gap:6,padding:"7px 16px",borderRadius:999,border:"1px solid var(--border-color)",background:"transparent",color:"var(--color-ink-soft)",fontSize:"0.82rem",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s" }}
            onMouseEnter={e=>{e.currentTarget.style.background="#c97d60";e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor="#c97d60"}}
            onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="var(--color-ink-soft)";e.currentTarget.style.borderColor="var(--border-color)"}}
          >↑ Back to top</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
