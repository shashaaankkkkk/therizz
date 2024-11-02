import React from "react";
import icons from "../../utils/utils"; // Ensure the icons are correctly imported
import StarRating from "./Stars"; // Import the StarRating component

const ExploreMoreItems = () => {
  // Sample data for more items with ratings and prices
  const moreItems = [
    {
      id: 1,
      image: icons.image3, // Ensure to replace with actual image paths
      product: "Casual Comfort Jeans",
      rating: 4, // Add rating
      price: 39.99, // Add price
    },
    {
      id: 2,
      image: icons.image4,
      product: "Stylish Sneakers",
      rating: 5, // Add rating
      price: 59.99, // Add price
    },
    {
      id: 3,
      image: icons.image5,
      product: "Trendy Hats",
      rating: 3, // Add rating
      price: 19.99, // Add price
    },
    {
      id: 4,
      image: icons.image7,
      product: "Modern Jackets",
      rating: 4, // Add rating
      price: 89.99, // Add price
    },
    // Add more items as needed
  ];

  return (
    <div style={{ padding: "20px", margin: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "15px" }}>Explore More Items</h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {moreItems.map((item) => (
          <div key={item.id} style={{ width: "150px", textAlign: "center", marginBottom: "20px" }}>
            <img
              src={item.image}
              alt={item.product}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <p style={{ marginTop: "10px", fontWeight: "500" }}>{item.product}</p>
            <StarRating rating={item.rating} /> {/* Add the StarRating component */}
            <p style={{ marginTop: "5px", fontWeight: "bold" }}>${item.price.toFixed(2)}</p> {/* Display the price */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMoreItems;
