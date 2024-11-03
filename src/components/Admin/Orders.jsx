import React, { useState } from "react";
import icons from "../../utils/utils";

const OrderTable = ({ orders }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter orders based on search query
  const filteredOrders = orders.filter((order) =>
    order.order.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        margin: "20px",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Orders</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "8px",
            width: "200px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Order Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              <img
                src={icons.Sort}
                alt="Sort Icon"
                className="inline-block w-7 h-7"
              />
            </th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              Order
            </th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              Date
            </th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              Total
            </th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              Status
            </th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <img
                  src={order.image}
                  alt={order.order}
                  style={{
                    width: "80px",
                    height: "60x",
                    borderRadius: "10%",
                    marginLeft: "30%", // Added margin to shift the image to the right
                  }}
                />
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {order.order}
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {order.date}
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                ${order.total}
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  color: getStatusColor(order.status),
                }}
              >
                {order.status}
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <button style={{ padding: "5px 10px", cursor: "pointer" }}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to style status color
const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "orange";
    case "Delivered":
      return "green";
    case "Cancelled":
      return "red";
    default:
      return "black";
  }
};

// Example usage with sample data
const OrderTable2 = () => {
  const orders = [
    {
      id: 1,
      image: icons.image2,
      order: "Classic Monochrome Tees",
      date: "2024-10-01",
      total: 100.99,
      status: "Pending",
    },
    {
      id: 2,
      image: icons.image,
      order: "Sleek and Cozy Black",
      date: "2024-10-03",
      total: 200.5,
      status: "Delivered",
    },
    {
      id: 3,
      image: icons.image6,
      order: "Elegant Ebony Sweatshirts",
      date: "2024-10-05",
      total: 300.75,
      status: "Cancelled",
    },
    {
      id: 4,
      image: icons.image7,
      order: "MOCKUP Black",
      date: "2024-10-05",
      total: 300.75,
      status: "Cancelled",
    },
    {
      id: 5,
      image: icons.image1,
      order: "Raw Black T-Shirt Lineup",
      date: "2024-10-05",
      total: 300.75,
      status: "Cancelled",
    },
    {
      id: 6,
      image: icons.image3,
      order: "Monochromatic Wardrobe",
      date: "2024-10-05",
      total: 300.75,
      status: "Cancelled",
    },
    {
      id: 7,
      image: icons.image4,
      order: "Essential Neutrals",
      date: "2024-10-05",
      total: 300.75,
      status: "Cancelled",
    },
    {
      id: 8,
      image: icons.image5,
      order: "UTRAANET Black",
      date: "2024-10-05",
      total: 300.75,
      status: "Cancelled",
    },
    // Add more orders here
  ];

  return <OrderTable orders={orders} />;
};

export default OrderTable2;
