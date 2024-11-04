// UserDashboardLayout.jsx
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom"; // Added Outlet and Link
import {
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import icons from "../../utils/utils";
import Footer from "../User/Footer.jsx";
import Newsletter from "../User/Newsletter";

import UserHeader from "./UserHeader.jsx";
const DiscountStrip = () => (
  <div className="p-2 bg-black text-white text-center">
    {/* Discount message or content */}
    <p>50% off on all items! Limited time offer.</p>
  </div>
);

const UserDashboardLayout = () => {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Discount Strip - Now integrated with Navbar */}
      <DiscountStrip />

      <UserHeader/>

      {/* Main Content Area - This is where child routes will be rendered */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default UserDashboardLayout;
