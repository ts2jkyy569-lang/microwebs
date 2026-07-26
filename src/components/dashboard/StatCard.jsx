export default function StatCard({
  title,
  subtitle,
  value,
}) {
  return (
    <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6">

      <h3 className="text-gray-400">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-3 text-yellow-400">
        {value}
      </h2>

      <p className="text-gray-500 mt-2">
        {subtitle}
      </p>

    </div>
  );
}