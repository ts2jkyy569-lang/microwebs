export default function StatCard({
  title,
  value,
  icon,
  color = "yellow",
  change,
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-yellow-400 transition">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {value}
          </h2>

          {change && (
            <p
              className={`mt-3 text-sm font-semibold ${
                change.startsWith("+")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {change}
            </p>
          )}
        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center
          ${
            color === "yellow"
              ? "bg-yellow-400 text-black"
              : color === "green"
              ? "bg-green-500 text-white"
              : color === "blue"
              ? "bg-blue-500 text-white"
              : color === "red"
              ? "bg-red-500 text-white"
              : "bg-purple-500 text-white"
          }`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}