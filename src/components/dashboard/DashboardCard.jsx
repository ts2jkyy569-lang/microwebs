export default function DashboardCard({
  title,
  value,
  color = "text-yellow-400",
}) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">

      <p className="text-gray-400">
        {title}
      </p>

      <h2 className={`text-5xl font-black mt-4 ${color}`}>
        {value}
      </h2>

    </div>
  );
}