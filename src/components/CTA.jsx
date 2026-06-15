import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold">
          Ready to work together?
        </h2>

        <p className="mt-6 text-slate-600">
          Let's create content that
          informs, inspires and converts.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg"
        >
          Start a Project
        </Link>
      </div>
    </section>
  );
}