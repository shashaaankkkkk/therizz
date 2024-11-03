import React from "react";
import CartTable2 from "../User/Cart";
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
