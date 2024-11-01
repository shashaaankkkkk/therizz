// src/components/navigation/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";
import icons from "../../utils/utils";

const navigationItems = [
  { path: "/", label: "Dashboard", icon: Home },
  { path: "/products", label: "Products", icon: Package },
  { path: "/orders", label: "Orders", icon: ShoppingCart },
  { path: "/customers", label: "Customers", icon: Users },
  {
    path: "/reviews",
    label: "Reviews",
    icon: () => (
      <img src={icons.EmptyStar} className="w-6 h-6 -ml-1" alt="Reviews Icon" />
    ),
  },
  { path: "/settings", label: "Settings", icon: Settings },
];

const NavItem = ({ to, label, icon: Icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm w-full transition-colors
        ${
          isActive
            ? "bg-gray-100 text-blue-600 dark:bg-neutral-700 dark:text-blue-500"
            : "text-gray-700 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700"
        }`}
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
};

const Sidebar = ({ isOpen }) => (
  <div
    className={`fixed inset-y-0 start-0 z-[60] w-[260px] bg-white border-e border-gray-200 
    transform transition-transform duration-300 dark:bg-neutral-800 dark:border-neutral-700
    ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
  >
    <div className="flex flex-col h-full">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-neutral-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Store Admin
        </h2>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </nav>

      <div className="border-t border-gray-200 dark:border-neutral-700 p-4">
        <div className="flex items-center gap-x-3 text-sm">
          <img src={icons.Admin} className="rounded-full w-8 h-8" alt="User" />
          <div>
            <span className="block font-medium text-gray-800 dark:text-neutral-200">
              Admin User
            </span>
            <span className="block text-gray-600 dark:text-neutral-400">
              admin@store.com
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
