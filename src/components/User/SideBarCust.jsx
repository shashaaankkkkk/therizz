import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar2 = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  return (
    <div className="w-64 bg-white shadow-lg h-[80vh]">
      <div className="px-6 py-8 h-full overflow-y-auto">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-4 py-4 mb-4 transition-colors duration-300 rounded-md ${
              activeItem === item.path
                ? "bg-gray-200 text-gray-800 -mx-6 px-6"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveItem(item.path)}
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6 mr-4" />
            <span className="text-lg font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const sidebarItems = [
  {
    label: "Orders",
    icon: "../src/assets/Cart.svg",
    path: "/profile/orders",
  },
  {
    label: "Wishlist",
    icon: "../src/assets/Heart.svg",
    path: "/profile/wishlist",
  },
  {
    label: "Address",
    icon: "../src/assets/Delivery.svg",
    path: "/profile/address",
  },
  {
    label: "Password",
    icon: "../src/assets/Key.svg",
    path: "/profile/change-password",
  },
  {
    label: "Account Detail",
    icon: "../src/assets/User.svg",
    path: "/profile/account",
  },
  {
    label: "Logout",
    icon: "../src/assets/Logout.svg",
    path: "/user/login",
  },
];

export default Sidebar2;
