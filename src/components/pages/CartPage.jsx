import React from "react";
import UserDashboardLayout from "../User/UserDashboardLayout"; // Adjust the path as necessary
import CartTable2 from "../User/cart";
import ExploreMoreItems from "../User/ExploreItems";
// Import the CartTable component

const CartPage = () => {
  return (
    <div>
      <CartTable2 />
      <ExploreMoreItems /> {/* Render the CartTable */}
    </div>
  );
};

export default CartPage;
