import React from "react";
import CartTable from "../User/Cart";
import ExploreMoreItems from "../User/ExploreItems";
import icons from "../../utils/utils";
// Import the CartTable component

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      image: icons.image2,
      product: "Classic Monochrome Tees",
      quantity: 2,
      price: 29.99,
    },
    {
      id: 2,
      image: icons.image,
      product: "Sleek and Cozy Black",
      quantity: 1,
      price: 19.99,
    },
    {
      id: 3,
      image: icons.image6,
      product: "Elegant Ebony Sweatshirts",
      quantity: 1,
      price: 49.99,
    },
    // Add more cart items here
  ];
  return (
    <div>
      <CartTable cartItems={cartItems} />
      <ExploreMoreItems /> {/* Render the CartTable */}
    </div>
  );
};

export default CartPage;
