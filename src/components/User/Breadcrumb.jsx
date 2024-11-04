import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();

  // Function to generate breadcrumb items based on current path
  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbs = [];

    // Handle the root path
    if (pathnames.length === 0) {
      return [{ label: "Home", path: "/" }];
    }

    // Map route segments to readable names
    const routeLabels = {
      admin: "Admin",
      user: "THE RIZZ",
      dashboard: "Dashboard",
      products: "Products",
      orders: "Orders",
      customers: "Customers",
      reviews: "Reviews",
      settings: "Settings",
      cart: "Cart",
      product: "Product",
      listing: "Listing",
      checkout: "Checkout",
      ulogin: "Login",
      usignin: "Sign up",
      homepage: "Home",
      "forgot-password": "Forgot Password",
      "reset-password": "Reset Password",
    };

    // Build breadcrumb array
    let currentPath = "";
    pathnames.forEach((name, index) => {
      currentPath += `/${name}`;
      const label =
        routeLabels[name] || name.charAt(0).toUpperCase() + name.slice(1);

      // Don't add 'admin' or 'user' to the visible breadcrumb path
      if (name !== "admin" && name !== "user") {
        breadcrumbs.push({
          label,
          path: currentPath,
          isLast: index === pathnames.length - 1,
        });
      } else if (name === "user") {
        // Add Ecommerce as first breadcrumb for user routes
        breadcrumbs.push({
          label: "THE RIZZ",
          path: currentPath,
          isLast: index === pathnames.length - 1,
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // If we're on the login page, don't show breadcrumbs
  if (location.pathname === "/login") return null;

  return (
    <nav className="bg-gray-100 px-4 py-5 sm:px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.path} className="flex items-center">
              {/* Add separator except for first item */}
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}

              {breadcrumb.isLast ? (
                // Last item is not clickable and is bold
                <span className="font-medium text-gray-900">
                  {breadcrumb.label}
                </span>
              ) : (
                // Clickable breadcrumb link
                <Link
                  to={breadcrumb.path}
                  className="text-gray-700 hover:text-gray-800 hover:underline"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
