export default function RecentOrders({ orders = [] }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-white">
          Recent Orders
        </h2>

        <button className="text-yellow-400 hover:text-yellow-300">
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-neutral-800">

              <th className="text-left text-gray-400 py-4">
                Customer
              </th>

              <th className="text-left text-gray-400">
                Website
              </th>

              <th className="text-left text-gray-400">
                Package
              </th>

              <th className="text-left text-gray-400">
                Amount
              </th>

              <th className="text-left text-gray-400">
                Payment
              </th>

              <th className="text-left text-gray-400">
                Project
              </th>

              <th className="text-left text-gray-400">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.length > 0 ? (

              orders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b border-neutral-800 hover:bg-neutral-800 transition"
                >

                  <td className="py-5 text-white">
                    {order.customer}
                  </td>

                  <td className="text-gray-300">
                    {order.websiteType}
                  </td>

                  <td className="text-gray-300">
                    {order.packagePlan}
                  </td>

                  <td className="text-yellow-400 font-semibold">
                    {order.currency === "NGN"
                      ? `₦${Number(order.price).toLocaleString()}`
                      : `$${Number(order.price).toLocaleString()}`}
                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        order.paymentStatus === "Paid"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>

                  </td>

                  <td>

                    <span className="text-blue-400">
                      {order.projectStatus}
                    </span>

                  </td>

                  <td>

                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
                      View
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="7"
                  className="text-center py-10 text-gray-500"
                >
                  No orders found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}