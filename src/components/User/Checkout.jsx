import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";

const Checkout = () => {
  const [address, setAddress] = useState({
    fullName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <>
      <Breadcrumb thick={true} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {/* Shipping Address Form */}
        <div
          style={{
            flex: 1,
            marginRight: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Shipping Address</h2>
          <form>
            <div style={{ marginBottom: "15px" }}>
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={address.fullName}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Street:</label>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>

            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
              <div style={{ flex: 1 }}>
                <label>State:</label>
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Zip Code:</label>
                <input
                  type="text"
                  name="zip"
                  value={address.zip}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>
            </div>
          </form>
        </div>

        {/* Purchase Summary */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Purchase Summary</h2>

          {/* Products List and Edit Cart Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            <div>
              <p> Monochrome T-Shirt - $50.00</p>
              <p> Denim Jeans - $75.00</p>
            </div>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                height: "fit-content",
              }}
            >
              Edit Cart
            </button>
          </div>

          {/* Receipt */}
          <div
            style={{
              borderTop: "1px solid #ccc",
              paddingTop: "15px",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>Subtotal:</span>
              <span>$125.00</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>Discount:</span>
              <span>-$10.00</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>Coupon Discount:</span>
              <span>-$5.00</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>Shipping:</span>
              <span>$5.00</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "20px",
              }}
            >
              <span>Total:</span>
              <span>$115.00</span>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "30px",
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
