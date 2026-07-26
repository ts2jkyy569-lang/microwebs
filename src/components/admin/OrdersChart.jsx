import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function OrdersChart({ data }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Orders Overview
        </h2>

        <p className="text-gray-400 mt-1">
          Orders received this year
        </p>
      </div>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#333"
            />

            <XAxis
              dataKey="month"
              stroke="#9ca3af"
            />

            <YAxis
              stroke="#9ca3af"
            />

            <Tooltip
              contentStyle={{
                background: "#171717",
                border: "1px solid #404040",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="orders"
              fill="#facc15"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}