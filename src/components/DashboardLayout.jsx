import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Navigation/Sidebar";
import { Menu, ChevronRight } from "lucide-react";
import icons from "../utils/utils";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getBreadcrumbs = () => {
    const path = location.pathname;

    if (path === "/") {
      return ["Admin", "Dashboard"];
    }

    // Remove leading slash and split path
    const pathSegments = path.slice(1).split("/");
    const breadcrumbs = ["Admin"];

    // Handle each path segment
    pathSegments.forEach((segment, index) => {
      // Format the segment (capitalize first letter and replace hyphens)
      const formattedSegment =
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

      // Handle "add" specially when it's after "products"
      if (segment === "add" && pathSegments[index - 1] === "products") {
        breadcrumbs.push("Add Product");
      } else {
        breadcrumbs.push(formattedSegment);
      }
    });

    return breadcrumbs;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <Sidebar isOpen={sidebarOpen} />
      {/* Main Content */}
      <div className="lg:ps-[260px]">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
          <div className="px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="lg:hidden p-2 text-gray-500 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <Menu className="size-6" />
                </button>
                {/* Breadcrumb Navigation */}
                <div className="flex items-center text-base ml-2">
                  {getBreadcrumbs().map((item, index) => (
                    <React.Fragment key={index}>
                      <span
                        className={
                          index === 0
                            ? "text-gray-500 dark:text-neutral-400" // Lighter color for "Admin"
                            : "text-gray-900 dark:text-neutral-100 font-medium" // Darker color for page names
                        }
                      >
                        {item}
                      </span>
                      {index < getBreadcrumbs().length - 1 && (
                        <ChevronRight className="size-4 mx-2 text-gray-400 dark:text-neutral-500" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  <img
                    src={icons.Logout}
                    alt="notifications"
                    className="size-7"
                  />
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* Page Content */}
        <main className="p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

