import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Josphat </title>
        <meta name="description" content="Josphat Koech — freelance content writer, editor and blogger with a B.A. in Journalism from UoN and 15+ years of agency writing experience across cybersecurity, finance, automotive, crypto and more." />
      </Helmet>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(48px,8vw,80px) 24px" }}>

        {/* Hero block */}
        <div className="about-hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,6vw,64px)", alignItems: "center", marginBottom: "clamp(48px,8vw,80px)" }}>
          <div>
            <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 14px" }}>About Me</p>
            <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--color-ink)", margin: "0 0 16px", lineHeight: 1.2 }}>
              Hey, I'm Josphat — your copywriting partner for the long haul.
            </h1>
            <p style={{ color: "var(--color-ink-soft)", fontStyle: "italic", marginBottom: 20, lineHeight: 1.8, fontSize: "1rem" }}>
              "Ah, that's the great puzzle." — Lewis Carroll
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: 16 }}>
              I've loved words and language for as long as I can remember — the art of them, the theatre, the rhythm and intent and precision. The way they shape how we see the world and each other.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: 16 }}>
              I earned a B.A. in Journalism from the University of Nairobi. After realizing my first job might involve carrying a police scanner at 2am in pursuit of "newsworthy" crimes, I decided I was better suited for marketing, advertising, and product writing.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: 28 }}>
              This was 2008 — around the beginning of the content strategy and digital content marketing phenomena. Over the last 15 years, I've written blog articles, emails, white papers, sales sheets, website content, social media posts, press releases, pitch decks, video scripts, and more. You name the media. I've probably done it.
            </p>
            <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 999, background: "#c97d60", color: "#fff", fontWeight: 600, textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#a8593f"}
              onMouseLeave={e => e.currentTarget.style.background = "#c97d60"}
            >Work with me →</Link>
          </div>

          {/* Right — visual identity card */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Experience timeline */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: 16, padding: "28px 28px 20px" }}>
              <p style={{ fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ink)", margin: "0 0 16px" }}>Work Experience</p>
              {[
                { company: "Verblio, Inc.", role: "Copywriter", period: "2021 — Present" },
                { company: "VPNAlert", role: "Copywriter", period: "2017 — 2021" },
                { company: "iWriter", role: "Junior Copywriter", period: "2011 — 2017" },
              ].map(({ company, role, period }) => (
                <div key={company} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 12, marginBottom: 12, borderBottom: "1px solid var(--border-color)" }}>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--color-ink)", margin: 0, fontSize: "0.9rem" }}>{company}</p>
                    <p style={{ color: "var(--color-ink-soft)", margin: 0, fontSize: "0.82rem" }}>{role}</p>
                  </div>
                  <p style={{ color: "#c97d60", margin: 0, fontSize: "0.78rem", fontWeight: 600, whiteSpace: "nowrap" }}>{period}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: 16, padding: "20px 28px" }}>
              <p style={{ fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ink)", margin: "0 0 12px" }}>Education</p>
              {[
                { school: "University of Nairobi", degree: "B.A. Journalism", period: "2010 — 2014" },
                { school: "Coursera Instructor Network", degree: "Digital Marketing", period: "2014 — 2015" },
              ].map(({ school, degree, period }) => (
                <div key={school} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--color-ink)", margin: 0, fontSize: "0.9rem" }}>{school}</p>
                    <p style={{ color: "var(--color-ink-soft)", margin: 0, fontSize: "0.82rem" }}>{degree}</p>
                  </div>
                  <p style={{ color: "#c97d60", margin: 0, fontSize: "0.78rem", fontWeight: 600, whiteSpace: "nowrap" }}>{period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 20, marginBottom: "clamp(48px,8vw,80px)" }}>
          {[["15+","Years Experience"],["100s","Clients Served"],["500+","Projects Delivered"],["6","Industries"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center", padding: "clamp(20px,3vw,36px) 16px", borderRadius: 16, border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
              <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#c97d60", margin: "0 0 6px", fontWeight: 700 }}>{num}</p>
              <p style={{ color: "var(--color-ink-soft)", margin: 0, fontWeight: 500, fontSize: "0.88rem" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Why choose me */}
        <div style={{ marginBottom: "clamp(48px,8vw,80px)" }}>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.6rem,3vw,2rem)", color: "var(--color-ink)", marginBottom: 12, textAlign: "center" }}>Why Choose Me?</h2>
          <p style={{ color: "var(--color-ink-soft)", textAlign: "center", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Solopreneurs and founders rarely get enough love when it comes to content. I'm changing that — I specialize in helping small businesses get more meaningful results from content.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {[
              { icon: "🎯", title: "Clarity First", body: "I take raw ideas and turn them into razor-sharp words that move your content up a quality rung on the SEO and AEO ladder." },
              { icon: "🗣️", title: "Your Voice, Amplified", body: "I go out of my way to understand the theme you wish to express and bring it to life — prioritizing your syntax, word choice, and creative expression." },
              { icon: "🔍", title: "Detail-Oriented", body: "I have a keen eye for detail and an unwavering commitment to quality. I approach every topic from various angles to offer fresh insights." },
              { icon: "🤝", title: "Team Player", body: "Working with many editors and content managers throughout the years, I found that being part of a team is just as fun as writing on my own." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ padding: "clamp(20px,3vw,28px)", borderRadius: 16, background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                <div style={{ fontSize: "1.7rem", marginBottom: 12 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "1.1rem", color: "var(--color-ink)", margin: "0 0 8px" }}>{title}</h3>
                <p style={{ color: "var(--color-ink-soft)", margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div style={{ background: "linear-gradient(135deg,#f4d9d0,#fff7f1)", borderRadius: 20, padding: "clamp(32px,5vw,48px)", border: "1px solid #f4d9d0", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.4rem,2.5vw,1.8rem)", color: "#271d1e", margin: "0 0 24px" }}>Industries I've Worked In</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {["Cybersecurity","Finance","Cryptocurrency","Automotive","iGaming / Sports Betting","Statistics & Data","Health & Medical","SaaS & Tech","Marketing & Advertising"].map(tag => (
              <span key={tag} style={{ padding: "7px 18px", borderRadius: 999, background: "#fff7f1", border: "1px solid #e4d7cf", color: "#6b5d5f", fontSize: "0.88rem", fontWeight: 500 }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-hero { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
