import React from "react";
import UserDashboardLayout from "../User/UserDashboardLayout"; // Adjust the path as necessary
import CartTable from "../User/Cart";
import ExploreMoreItems from "../User/ExploreItems";
// Import the CartTable component

const CartPage = () => {
  return (
    <div>
      <CartTable />
      <ExploreMoreItems /> {/* Render the CartTable */}
    </div>
  );
};

export default CartPage;
