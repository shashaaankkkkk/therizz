import React from "react";
import icons from "../../utils/utils"; // Adjust path as needed

const OrderHistoryTable = ({ order4 }) => {
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
      {/* Title */}
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Orders</h2>

      {/* Order Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>Image</th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>Product Name</th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>Status</th>
            <th style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {order4.map((order) => (
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
                  alt={order.productName}
                  style={{
                    width: "80px",
                    height: "60px",
                    borderRadius: "10%",
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
                {order.productName}
              </td>
              <td
                style={{
                  padding: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  color: "black",
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
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  View Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example usage with sample data
const OrderHistoryTableContainer = () => {
  const order4 = [
    {
      id: 1,
      image: icons.image1,
      productName: "Classic Monochrome Tees",
      status: "Processing",
    },
    {
      id: 2,
      image: icons.image2,
      productName: "Sleek and Cozy Black",
      status: "Complete",
    },
    // Add more orders as needed
  ];

  return <OrderHistoryTable order4={order4} />;
};

export default OrderHistoryTableContainer;
