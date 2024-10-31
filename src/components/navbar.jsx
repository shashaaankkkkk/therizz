// components/Navbar.js
import React from "react";
import { FiBell } from "react-icons/fi";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md pr-8">
      <h2 className="text-xl font-semibold"></h2>

      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <FiBell className="text-xl" />
        </button>

        {/* Profile Picture */}
        <img
          src="src\assets\pfp.png" // Replace with actual profile image URL
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />

        {/* Logged-in User Profile Photo
        <img
          src="" // Replace with the logged-in user image URL
          alt="Logged-in User"
          className="w-10 h-10 rounded-full"
        /> */}
      </div>
    </div>
  );
}

export default Navbar;
