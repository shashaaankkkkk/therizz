// components/Navbar.js
import React from "react";
import { FiBell } from "react-icons/fi";
import { Breadcrumb } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";

function Navbar() {
  const location = useLocation();

  // Define breadcrumb items based on the current path
  const getBreadcrumbItems = () => {
    const path = location.pathname;
    const paths = path.split("/").filter(Boolean); // Split path and remove empty strings

    const breadcrumbItems = [
      <Breadcrumb.Item icon={HiHome} key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>,
    ];

    // Map each path segment to a breadcrumb item
    paths.forEach((segment, index) => {
      const url = `/${paths.slice(0, index + 1).join("/")}`;
      const capitalizedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);

      breadcrumbItems.push(
        <Breadcrumb.Item key={url}>
          <Link to={url}>{capitalizedSegment}</Link>
        </Breadcrumb.Item>
      );
    });

    return breadcrumbItems;
  };

  return (
    <div className="flex flex-col bg-white p-4 shadow-md pr-8">
      {/* Breadcrumb and Action Section */}
      <div className="flex items-center justify-between">
        {/* Dynamic Breadcrumb */}
        <Breadcrumb className="mt-1">
          {getBreadcrumbItems()}
        </Breadcrumb>

        {/* Notification and Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <FiBell className="text-xl" />
          </button>

          {/* Profile Picture */}
          <img
            src="src/assets/pfp.png" // Replace with actual profile image URL
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />

          {/* Logged-in User Profile Photo */}
          <img
            src="https://via.placeholder.com/40" // Replace with the logged-in user image URL
            alt="Logged-in User"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
