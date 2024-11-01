"use client";

import React, { useState } from 'react';
import { Button } from "flowbite-react";

const Card = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <Card>
            <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                  Profile Picture
                </label>
                <div className="flex items-center gap-4">
                  <img src="/api/placeholder/64/64" alt="Profile" className="rounded-full" />
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    Change Photo
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 dark:border-neutral-700 dark:bg-neutral-800"
                    defaultValue="Admin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 dark:border-neutral-700 dark:bg-neutral-800"
                    defaultValue="User"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 dark:border-neutral-700 dark:bg-neutral-800"
                  defaultValue="admin@store.com"
                />
              </div>
            </form>
          </Card>
        );
      case "store":
        return (
          <Card>
            <h3 className="text-lg font-semibold mb-4">Store Settings</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                  Store Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 dark:border-neutral-700 dark:bg-neutral-800"
                  defaultValue="My Store"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                  Currency
                </label>
                <select className="w-full rounded-lg border-gray-200 dark:border-neutral-700 dark:bg-neutral-800">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                  Timezone
                </label>
                <select className="w-full rounded-lg border-gray-200 dark:border-neutral-700 dark:bg-neutral-800">
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Time</option>
                  <option value="PST">Pacific Time</option>
                </select>
              </div>
            </form>
          </Card>
        );
      case "notifications":
        return (
          <Card>
            <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                    Email Notifications
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-neutral-400">
                    Receive notifications about orders and customers
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                    SMS Notifications
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-neutral-400">
                    Receive SMS alerts for urgent updates
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">Settings</h2>

      {/* Tab buttons */}
      <div className="flex space-x-4 mb-4">
        <Button color="gray" outline onClick={() => setActiveTab("profile")}>
          Profile Settings
        </Button>
        <Button color="gray" outline onClick={() => setActiveTab("store")}>
          Store Settings
        </Button>
        <Button color="gray" outline onClick={() => setActiveTab("notifications")}>
          Notification Settings
        </Button>
      </div>

      {/* Content area */}
      {renderContent()}

      {/* Footer Buttons */}
      <div className="flex justify-end gap-4 mt-4">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700 dark:hover:bg-neutral-700"
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
