export default function PortfolioCard({
  project,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
      <img
        src={project.image}
        alt={project.title}
        className="h-64 w-full object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-indigo-600">
          {project.category}
        </p>

        <h3 className="font-bold mt-2">
          {project.title}
        </h3>
      </div>
    </div>
  );
}