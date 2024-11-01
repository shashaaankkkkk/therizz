import React from 'react';
import { Link } from 'react-router-dom';

export const NavItem = ({ icon: Icon, label, active = false, to }) => (
  <Link
    to={to}
    className={`flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm w-full ${
      active 
        ? 'bg-gray-100 text-blue-600 dark:bg-neutral-700 dark:text-blue-500' 
        : 'text-gray-700 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700'
    }`}
  >
    <Icon className="size-4" />
    {label}
  </Link>
);