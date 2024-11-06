import React, { useState } from "react";
import icons from "../../utils/utils"; // Assuming you have your icons in this path
import { Heart } from "lucide-react";
import ExploreMoreItems from "./ExploreItems";
import Breadcrumb from "./Breadcrumb";
const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [mainImage, setMainImage] = useState(icons.image2); // Set initial main image
  const [showDetails, setShowDetails] = useState(true); // State to toggle between details and reviews

  // Sample product data
  const product = {
    name: "Classic Monochrome T-Shirt",
    price: "$50.00",
    oneLinerDescription: "A stylish and comfortable t-shirt for everyday wear.",
    images: [icons.image2, icons.image2, icons.image2, icons.image2],
    rating: 4.5,
    inStock: true,
    description:
      "This classic monochrome t-shirt is made from 100% premium cotton, providing ultimate comfort and durability. Its timeless design makes it suitable for any occasion, whether you're dressing up for a casual outing or lounging at home. Available in multiple colors and sizes, this t-shirt is a wardrobe essential for anyone who values style and comfort. Wear it on its own or layer it under a jacket for a trendy look.",
    colors: ["#8B4513", "#000000", "#F5DEB3"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [
      { user: "Alice", comment: "Great quality, very comfortable!", rating: 5 },
      { user: "Bob", comment: "Nice fit but a bit overpriced.", rating: 4 },
    ],
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  // Handle zoom effect
  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <>
      <Breadcrumb />
      <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Side - Thumbnail Images */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "20px",
            }}
          >
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(image)}
                style={{
                  width: "60px",
                  height: "60px",
                  marginBottom: "10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  border:
                    mainImage === image ? "2px solid black" : "1px solid #ddd",
                }}
              />
            ))}
          </div>

          {/* Center - Main Product Image with zoom effect */}
          <div
            style={{
              flex: 0.7,
              marginRight: "40px",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <img
              src={mainImage}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
                transform: isZoomed ? `scale(1.5)` : "scale(1)",
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />
          </div>

          {/* Right Side - Product Details */}
          <div style={{ flex: 1.3, padding: "0 10px" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {product.name}
            </h2>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "5px",
              }}
            >
              {product.price}
            </h3>
            <p
              style={{ fontSize: "16px", color: "#555", marginBottom: "15px" }}
            >
              {product.oneLinerDescription}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "15px 0",
              }}
            >
              <span style={{ fontSize: "18px", marginRight: "10px" }}>
                тнР {product.rating} (
                {product.rating >= 4.5 ? "Excellent" : "Good"})
              </span>
              <span
                style={{
                  fontSize: "16px",
                  color: product.inStock ? "green" : "red",
                }}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div
              style={{
                margin: "20px 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                style={{
                  width: "50px",
                  textAlign: "center",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  margin: "0 10px",
                }}
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                +
              </button>
            </div>

            {/* Color Selection */}
            <div style={{ margin: "10px 0" }}>
              <h4 style={{ fontSize: "16px", fontWeight: "bold" }}>Colors:</h4>
              <div style={{ display: "flex", gap: "10px" }}>
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: color,
                      borderRadius: "50%",
                      cursor: "pointer",
                      border: "2px solid black",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div style={{ margin: "10px 0" }}>
              <h4 style={{ fontSize: "16px", fontWeight: "bold" }}>Sizes:</h4>
              <div style={{ display: "flex", gap: "10px" }}>
                {product.sizes.map((size, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider Line */}
            <hr style={{ margin: "20px 0", border: "1px solid #ddd" }} />

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  flex: 1,
                }}
              >
                Add to Cart
              </button>

              <button
                onClick={handleAddToWishlist}
                style={{
                  padding: "10px 20px",
                  border: "1px solid black",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Heart
                  fill={isWishlisted ? "red" : "none"}
                  color={isWishlisted ? "red" : "black"}
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                />
                {isWishlisted ? "Added to Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>

        {/* Combined Product Details and Reviews Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
            marginBottom: "50px",
            paddingTop: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "140px",
            marginRight: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            {/* Button Section */}
            <div
              style={{
                marginRight: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => setShowDetails(true)}
                style={{
                  padding: "10px 15px",
                  marginRight: "10px",
                  borderBottom: showDetails ? "2px solid black" : "none",
                  transition: "border-bottom 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "black",
                    transition: "width 0.3s ease",
                  },
                  "&:hover:before": {
                    width: "100%",
                  },
                }}
              >
                Details
              </button>
              <button
                onClick={() => setShowDetails(false)}
                style={{
                  padding: "10px 15px",
                  borderBottom: !showDetails ? "2px solid black" : "none",
                  transition: "border-bottom 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "black",
                    transition: "width 0.3s ease",
                  },
                  "&:hover:before": {
                    width: "100%",
                  },
                }}
              >
                Reviews
              </button>
            </div>

            {/* Reviews/Description Section */}
            <div style={{ flex: 1 }}>
              {showDetails ? (
                <>
                  <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Description
                  </h4>
                  <p
                    style={{ padding: "10px", fontSize: "14px", color: "#555" }}
                  >
                    {product.description}
                  </p>
                </>
              ) : (
                <>
                  <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Reviews
                  </h4>
                  <div
                    style={{ padding: "10px", fontSize: "14px", color: "#555" }}
                  >
                    {product.reviews.map((review, index) => (
                      <div key={index} style={{ marginBottom: "10px" }}>
                        <strong>{review.user}</strong> - тнР {review.rating}
                        <p>{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          <ExploreMoreItems />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;