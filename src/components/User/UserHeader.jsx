import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom"; // Added Outlet and Link
import {
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";

import { AiOutlineUser } from "react-icons/ai";

import icons from "../../utils/utils";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { FishOff } from "lucide-react";
function UserHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4 px-8 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center ml-[90px]">
          <img src={icons.Logo} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-xl font-semibold">Ecommerce</span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 relative md:hidden">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search products"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex flex-grow justify-center mx-4">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/user/homepage"
                className="text-gray-800 hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/user/categories"
                className="text-gray-800 hover:text-blue-600"
              >
                Categories <span className="ml-1">&#x25BE;</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user/about"
                className="text-gray-800 hover:text-blue-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/user/contact"
                className="text-gray-800 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar and Icons for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search products"
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Cart Icon */}
          <Link to="/user/cart">
            <FiShoppingBag className="text-2xl text-gray-800 hover:text-blue-600 cursor-pointer" />
          </Link>

          {/* Profile Icon with Link */}
          <Link to="/profile/account">
            <AiOutlineUser className="text-2xl text-gray-800 hover:text-blue-600 cursor-pointer" />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile Menu */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4 py-4 bg-white shadow-md">
          {/* Profile Icon at the Top Left with Padding */}
          <div className="flex justify-start p-4">
            <FaUserCircle className="text-3xl text-gray-800 hover:text-blue-600 cursor-pointer" />
          </div>

          {/* Navigation Links */}
          <li>
            <Link
              to="/user/homepage"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/user/categories"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600"
            >
              Categories <span className="ml-1">&#x25BE;</span>
            </Link>
          </li>
          <li>
            <Link
              to="/user/about"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/user/contact"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Outlet for nested routes */}
    </header>
  );
}

export default UserHeader;
