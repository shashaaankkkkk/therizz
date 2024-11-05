import React, { useState } from "react";
import icons from "../../utils/utils";
import Breadcrumb from "./Breadcrumb";

const CartTable = ({ cartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [discount, setDiscount] = useState(0); // State for discount
  const [couponDiscount, setCouponDiscount] = useState(0); // State for coupon discount
  const [couponCode, setCouponCode] = useState(""); // State for coupon input

  // Filter cart items based on search query
  const filteredCartItems = cartItems.filter((item) =>
    item.product.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Placeholder function for checkout action
  const handleCheckout = () => {
    alert("Proceeding to checkout..."); // Example alert
  };

  // Placeholder function for moving to wishlist
  const handleMoveToWishlist = (itemId) => {
    alert(`Item with ID ${itemId} moved to wishlist`); // Example alert
  };

  const subtotal = filteredCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1; // 10% tax
  const shippingCharge = 5.0;

  // Apply discounts
  const totalDiscount = (subtotal * discount) / 100 + couponDiscount; // Total discount calculation
  const total = subtotal + tax + shippingCharge - totalDiscount; // Updated total calculation

  // Function to handle coupon application
  const applyCoupon = () => {
    // Logic to apply the coupon code
    if (couponCode) {
      setCouponDiscount(10); // Example: apply a $10 discount for any valid coupon
      alert(`Coupon ${couponCode} applied!`);
      setCouponCode(""); // Clear the coupon code field after applying
    } else {
      alert("Please enter a coupon code.");
    }
  };

  return (
    <>
      <Breadcrumb thick={true} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {/* Cart Table */}
          <div style={{ flex: 1, marginRight: "20px", minWidth: "300px" }}>
            <div
              style={{
                padding: "15px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Header Section */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Cart</h2>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: "6px",
                    width: "180px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                />
              </div>

              {/* Cart Table */}
              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "14px",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        <img
                          src={icons.Sort}
                          alt="Sort Icon"
                          className="inline-block w-6 h-6"
                        />
                      </th>
                      <th
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        Product
                      </th>
                      <th
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        Quantity
                      </th>
                      <th
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        Price
                      </th>
                      <th
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        Total
                      </th>
                      <th
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCartItems.map((item) => (
                      <tr key={item.id}>
                        <td
                          style={{
                            padding: "10px",
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.product}
                            style={{
                              width: "50px",
                              height: "45px",
                              borderRadius: "10%",
                            }}
                          />
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          {item.product}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <button style={{ padding: "0 5px" }}>-</button>
                          {item.quantity}
                          <button style={{ padding: "0 5px" }}>+</button>
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          ${item.price.toFixed(2)}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td
                          style={{
                            padding: "10px",
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <div>
                            <button
                              onMouseEnter={(e) =>
                                (e.target.style.color = "blue")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "black")
                              }
                              style={{
                                padding: "5px 8px",
                                cursor: "pointer",
                                color: "black",
                                border: "none",
                                backgroundColor: "transparent",
                                marginRight: "5px",
                                fontSize: "14px",
                              }}
                              onClick={() => handleMoveToWishlist(item.id)}
                            >
                              Move to Wishlist
                            </button>
                            <button
                              onMouseEnter={(e) =>
                                (e.target.style.color = "red")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "black")
                              }
                              style={{
                                padding: "5px 8px",
                                cursor: "pointer",
                                color: "black",
                                border: "none",
                                backgroundColor: "transparent",
                                fontSize: "14px",
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Receipt Section */}
          <div
            style={{
              flex: "0 0 300px",
              height: "auto",
              minWidth: "250px",
              maxWidth: "300px",
            }}
          >
            {" "}
            {/* Fixed width for receipt */}
            <div
              style={{
                padding: "15px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <h4 style={{ fontSize: "16px", marginBottom: "30px" }}>
                Receipt
              </h4>{" "}
              {/* Increased marginBottom for spacing */}
              {/* Apply Coupons Section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={{
                    padding: "6px",
                    flex: 1,
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "14px",
                    marginRight: "5px",
                  }}
                />
                <button
                  onClick={applyCoupon}
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "black",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Apply
                </button>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                  }}
                >
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                  }}
                >
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                  }}
                >
                  <span>Shipping Charge:</span>
                  <span>${shippingCharge.toFixed(2)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  <span>Discount:</span>
                  <span>${totalDiscount.toFixed(2)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  <span>Coupon Discount:</span>
                  <span>${couponDiscount.toFixed(2)}</span>
                </div>
                <hr style={{ margin: "10px 0" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              {/* Checkout Button */}
              <div
                style={{
                  textAlign: "right",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                <button
                  onClick={handleCheckout}
                  style={{
                    padding: "10px 15px",
                    backgroundColor: "black",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                    width: "100%",
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CSS for responsiveness */}
        <style>
          {`
          @media (max-width: 768px) {
            h2 {
              font-size: 18px;
            }
            h4 {
              font-size: 16px;
              margin-bottom: 20px; /* Adjusted margin-bottom */
            }
            input {
              font-size: 12px;
            }
            button {
              font-size: 12px;
            }
            table {
              font-size: 12px;
            }
            th, td {
              padding: 8px; /* Adjust padding for smaller screens */
            }
          }
        `}
        </style>
      </div>
    </>
  );
};


export default CartTable;