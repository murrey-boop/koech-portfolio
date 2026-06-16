import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-6xl text-terracotta-dark mb-4">Oops!</h1>
      <p className="text-ink-soft text-lg mb-2">Something went wrong.</p>
      <p className="text-ink-soft text-sm mb-8 italic">
        {error?.statusText || error?.message || "Unknown error"}
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-terracotta text-white hover:bg-terracotta-dark transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}