import type { Order } from "@/types/orders";

export const OrdersTable = ({ orders}:{orders:Order[]}) => {
  return (
    <div className="p-4 w-full">
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3 text-left">Items</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Payment</th>
              <th className="px-4 py-3 text-left">Shipping</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {orders?.map((order) => (
              <tr
                key={order._id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* ORDER ID */}
                <td className="px-4 py-3 font-medium">
                  #{order._id.substring(0, 8)}
                </td>

                {/* USER */}
                <td className="px-4 py-3">
                  {order.user?.name || "Unknown User"}
                  <br />
                  <span className="text-xs text-gray-500">
                    {order.shippingAddress?.phoneNumber}
                  </span>
                </td>

                {/* ITEMS */}
                <td className="px-4 py-3">
                  {order.orderItems?.length} items
                </td>

                {/* TOTAL PRICE */}
                <td className="px-4 py-3 font-semibold">
                  Rs. {order.totalPrice.toFixed(2)}
                </td>

                {/* ORDER STATUS */}
                <td className="px-4 py-3">
                  <span
                    className={`
                      px-2 py-1 rounded text-xs font-semibold
                      ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                      }
                    `}
                  >
                    {order.status}
                  </span>
                </td>

                {/* PAYMENT */}
                <td className="px-4 py-3">
                  {order.isPaid ? (
                    <span className="text-green-600 font-semibold">
                      Paid
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">
                      Not Paid
                    </span>
                  )}
                </td>

                {/* SHIPPING */}
                <td className="px-4 py-3">
                  {order.courierName ? (
                    <>
                      <div>{order.courierName}</div>
                      <div className="text-xs text-gray-500">
                        {order.trackingNumber}
                      </div>
                    </>
                  ) : (
                    <span className="text-gray-400">Not Assigned</span>
                  )}
                </td>

                {/* ACTIONS */}
                <td className="px-4 py-3">
                  <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">
                    View
                  </button>
                </td>
              </tr>
            ))}

            {orders?.length === 0 && (
              <tr>
                <td
                  colSpan = {8}
                  className="text-center py-6 text-gray-500 italic"
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
};

