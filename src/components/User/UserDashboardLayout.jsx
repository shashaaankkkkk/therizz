// Navbar.jsx
import React, { useState } from "react";
import { FaShoppingCart, FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const UserDashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4 px-8 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/path-to-logo.svg" alt="Logo" className="w-8 h-8 mr-2" />
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
            <li><a href="/" className="text-gray-800 hover:text-blue-600">Home</a></li>
            <li>
              <a href="/categories" className="text-gray-800 hover:text-blue-600">
                Categories <span className="ml-1">&#x25BE;</span>
              </a>
            </li>
            <li><a href="/about" className="text-gray-800 hover:text-blue-600">About</a></li>
            <li><a href="/contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
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
          <a href="#"><FaShoppingCart className="text-2xl text-gray-800 hover:text-blue-600 cursor-pointer" /></a>

          {/* Profile Icon */}
          <FaUserCircle className="text-2xl text-gray-800 hover:text-blue-600 cursor-pointer" />
        </div>

        {/* Hamburger Icon for Mobile Menu */}
        <button className="md:hidden text-gray-800 focus:outline-none" onClick={toggleMobileMenu}>
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
          <li><a href="/" className="text-gray-800 hover:text-blue-600">Home</a></li>
          <li>
            <a href="/categories" className="text-gray-800 hover:text-blue-600">
              Categories <span className="ml-1">&#x25BE;</span>
            </a>
          </li>
          <li><a href="/about" className="text-gray-800 hover:text-blue-600">About</a></li>
          <li><a href="/contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default UserDashboardLayout;

