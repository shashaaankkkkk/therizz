import React from "react";

// StarRating component to display stars based on rating
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? "#FFD700" : "#ddd" }}>
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

export default StarRating;
