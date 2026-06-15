import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-6xl font-bold mb-6"
        >
          Words That Inform,
          <span className="text-indigo-600">
            {" "}Inspire
          </span>
          , and Convert.
        </motion.h1>

        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400">
          Professional content writing,
          SEO articles and copywriting
          services by Josphat Koech.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white"
          >
            Hire Me
          </Link>

          <Link
            to="/portfolio"
            className="px-6 py-3 border rounded-lg"
          >
            View Work
          </Link>
        </div>
      </div>
    </section>
  );
}