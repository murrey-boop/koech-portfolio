import { Helmet } from "react-helmet-async";
import BlogCard from "../components/BlogCard";
import { posts } from "../data/blog";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — Unhinged Words</title>
        <meta name="description" content="Writing tips, content strategy insights, and freelance life from Unhinged Words." />
        <meta property="og:title" content="Blog — Unhinged Words" />
        <meta property="og:description" content="Writing tips, content strategy insights, and freelance life from Unhinged Words." />
        <meta property="og:image" content="https://www.unhingedwords.com/og-image.png" />
        <meta property="og:url" content="https://www.unhingedwords.com/blog" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.unhingedwords.com/blog" />
      </Helmet>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(48px,8vw,80px) 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}>
          <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>Thoughts & Insights</p>
          <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--color-ink)", margin: "0 0 16px" }}>The Blog</h1>
          <p style={{ color: "var(--color-ink-soft)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Writing about writing — tips, process, and what I've learned helping brands find their voice.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 28 }}>
          {posts.map(post => <BlogCard key={post.slug} post={post} />)}
        </div>
      </div>
    </>
  );
}
