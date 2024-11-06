import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ thick = false }) => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbs = [];

    if (pathnames.length === 0) {
      return [{ label: "Home", path: "/" }];
    }

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

    let currentPath = "";
    pathnames.forEach((encodedName, index) => {
      const name = decodeURIComponent(encodedName); // Decode the URL component

      // Capitalize each word in multi-word labels
      const label =
        routeLabels[name] ||
        name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

      currentPath += `/${encodedName}`;
      if (name !== "admin" && name !== "user") {
        breadcrumbs.push({
          label,
          path: currentPath,
          isLast: index === pathnames.length - 1,
        });
      } else if (name === "user") {
        breadcrumbs.push({
          label: "THE RIZZ",
          path: "/user/home",
          isLast: index === pathnames.length - 1,
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = React.useMemo(() => getBreadcrumbs(), [location]);

  // If we're on the login page, don't show breadcrumbs
  if (location.pathname === "/login") return null;

  // Get last breadcrumb for heading
  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];

  return (
    <nav
      aria-label="Breadcrumb"
      className={`bg-gray-200 px-4 ${thick ? "py-8" : "py-5"} sm:px-6 w-full`}
    >
      <div className="max-w-7xl mx-auto">
        {thick ? (
          <>
            {/* Thick Breadcrumb Heading */}
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              {lastBreadcrumb.label}
            </h2>
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.path} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                  )}
                  {breadcrumb.isLast ? (
                    <span className="font-medium text-gray-900">
                      {breadcrumb.label}
                    </span>
                  ) : (
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
          </>
        ) : (
          // Thin Breadcrumb
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                )}
                {breadcrumb.isLast ? (
                  <span className="font-medium text-gray-900">
                    {breadcrumb.label}
                  </span>
                ) : (
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
        )}
      </div>
    </nav>
  );
};

export default Breadcrumb;
