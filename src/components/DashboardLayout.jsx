import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Navigation/Sidebar';
import { Menu, Bell } from 'lucide-react';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <Sidebar isOpen={sidebarOpen} />
      
      {/* Main Content */}
      <div className="lg:ps-[260px]">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="lg:hidden p-2 text-gray-500 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="size-6" />
              </button>
              
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  <Bell className="size-6" />
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