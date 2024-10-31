// components/RecentOrders.jsx
import React from "react";

const recentOrdersData = [
  { item: "Product A", date: "2024-10-01", total: "$150", status: "Shipped" },
  {
    item: "Product B",
    date: "2024-10-02",
    total: "$300",
    status: "Processing",
  },
  { item: "Product C", date: "2024-10-03", total: "$250", status: "Delivered" },
  { item: "Product D", date: "2024-10-04", total: "$200", status: "Cancelled" },
  // Add more data as needed
];

const RecentOrders = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded shadow-md">
        <thead>
          <tr>
            <th className="py-3 px-5 border-b text-left text-gray-700 font-semibold">
              Item
            </th>
            <th className="py-3 px-5 border-b text-left text-gray-700 font-semibold">
              Date
            </th>
            <th className="py-3 px-5 border-b text-left text-gray-700 font-semibold">
              Total
            </th>
            <th className="py-3 px-5 border-b text-left text-gray-700 font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {recentOrdersData.map((order, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-3 px-5 border-b">{order.item}</td>
              <td className="py-3 px-5 border-b">{order.date}</td>
              <td className="py-3 px-5 border-b">{order.total}</td>
              <td
                className={`py-3 px-5 border-b ${
                  order.status === "Shipped"
                    ? "text-green-500"
                    : order.status === "Processing"
                      ? "text-yellow-500"
                      : order.status === "Delivered"
                        ? "text-blue-500"
                        : "text-red-500"
                }`}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
