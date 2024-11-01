import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const DashboardHeader = () => (
  <div className="flex gap-x-4 items-center">
    <div className="flex-1">
      <div className="relative">
        <input
          type="text"
          className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:focus:ring-blue-500"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
          <Search className="size-4 text-gray-400" />
        </div>
      </div>
    </div>
    
    <button className="size-10 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:outline-none">
      <Bell className="size-4" />
      <span className="sr-only">Notifications</span>
    </button>
    
    <button className="size-10 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:outline-none">
      <User className="size-4" />
      <span className="sr-only">Account</span>
    </button>
  </div>
);

export default DashboardHeader;