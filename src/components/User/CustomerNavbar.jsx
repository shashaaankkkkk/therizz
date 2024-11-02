// Navbar.js
import React from "react";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";

const NavbarCustomer = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-8 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/path-to-logo.svg" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 mr-2" />
        <span className="text-lg md:text-xl font-semibold">Ecommerce</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8">
        <li><a href="/" className="text-gray-800 hover:text-blue-600">Home</a></li>
        <li>
          <a href="/categories" className="text-gray-800 hover:text-blue-600">
            Categories <span className="ml-1">&#x25BE;</span>
          </a>
        </li>
        <li><a href="/about" className="text-gray-800 hover:text-blue-600">About</a></li>
        <li><a href="/contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
      </ul>

      {/* Search and Icons */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <div className="relative hidden md:block">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search products"
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 w-full max-w-xs md:max-w-sm"
          />
        </div>
        <FaShoppingCart className="text-xl md:text-2xl text-gray-800 hover:text-blue-600 cursor-pointer" />
        <FaUserCircle className="text-xl md:text-2xl text-gray-800 hover:text-blue-600 cursor-pointer" />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none">
        <FaUserCircle className="text-2xl" />
      </button>
    </nav>
  );
};

export default NavbarCustomer;
