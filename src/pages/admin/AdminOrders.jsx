import useOrders from "../../hooks/useOrders";
import {
  updateOrder,
  deleteOrder,
} from "../../services/admin/orderService";

export default function AdminOrders() {
  const { orders, loading } = useOrders();

  if (loading) {
    return (
      <div className="text-white p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-white p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Orders
        </h1>

        <span className="text-yellow-400">
          {orders.length} Orders
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-neutral-800">

              <th className="text-left py-4">
                Customer
              </th>

              <th className="text-left">
                Website
              </th>

              <th className="text-left">
                Package
              </th>

              <th className="text-left">
                Amount
              </th>

              <th className="text-left">
                Payment
              </th>

              <th className="text-left">
                Project
              </th>

              <th className="text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.id}
                className="border-b border-neutral-800"
              >

                <td className="py-5">
                  {order.details?.businessName || "Unknown"}
                </td>

                <td>
                  {order.websiteType}
                </td>

                <td>
                  {order.packagePlan}
                </td>

                <td className="text-yellow-400">
                  {order.currency === "NGN"
                    ? `₦${Number(order.price).toLocaleString()}`
                    : `$${Number(order.price).toLocaleString()}`}
                </td>

                <td>
                  {order.paymentStatus}
                </td>

                <td>
                  {order.projectStatus || "Pending"}
                </td>

                <td className="space-x-2">

                  <button
                    onClick={() =>
                      updateOrder(order.id, {
                        projectStatus: "In Progress",
                      })
                    }
                    className="bg-blue-500 px-3 py-2 rounded"
                  >
                    Start
                  </button>

                  <button
                    onClick={() =>
                      updateOrder(order.id, {
                        projectStatus: "Completed",
                      })
                    }
                    className="bg-green-500 px-3 py-2 rounded"
                  >
                    Complete
                  </button>

                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="bg-red-500 px-3 py-2 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}