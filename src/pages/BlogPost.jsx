import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts } from "../data/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((entry) => entry.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} — Unhinged Words</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} — Unhinged Words`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content="https://www.unhingedwords.com/og-image.png" />
        <meta property="og:url" content={`https://www.unhingedwords.com/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://www.unhingedwords.com/blog/${slug}`} />
      </Helmet>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(48px,8vw,80px) 24px" }}>
        <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 14px" }}>{post.category}</p>
        <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2.2rem,5vw,3.6rem)", color: "var(--color-ink)", margin: "0 0 16px", lineHeight: 1.1 }}>{post.title}</h1>
        <p style={{ color: "var(--color-ink-soft)", margin: "0 0 28px", fontSize: "0.95rem" }}>{post.date} · {post.readTime}</p>
        <img src={post.image} alt={post.title} style={{ width: "100%", height: "auto", borderRadius: 20, marginBottom: 28, display: "block" }} />
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: 20, padding: "clamp(24px,4vw,36px)", color: "var(--color-ink)", lineHeight: 1.8, fontSize: "1.03rem" }}>
          <p style={{ marginTop: 0 }}>{post.excerpt}</p>
          <p>This article page is wired from the existing sitemap and blog card links, so each featured post now resolves to a real route in production.</p>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/blog" style={{ color: "#a8593f", fontWeight: 600, textDecoration: "none" }}>← Back to blog</Link>
        </div>
      </article>
    </>
  );
}