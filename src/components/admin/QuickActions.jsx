export default function QuickActions() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid gap-4 mt-6">
        <button className="bg-yellow-400 text-black rounded-xl py-3 font-semibold">
          View Orders
        </button>

        <button className="bg-blue-500 text-white rounded-xl py-3 font-semibold">
          View Customers
        </button>

        <button className="bg-green-500 text-white rounded-xl py-3 font-semibold">
          View Payments
        </button>
      </div>
    </div>
  );
}