export default function ServiceCard({
  title,
  description,
}) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800">
      <h3 className="font-bold text-xl mb-3">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}