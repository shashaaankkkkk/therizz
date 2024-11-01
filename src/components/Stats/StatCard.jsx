import React from 'react';

export const StatCard = ({ label, value, icon: Icon, color, subtext }) => (
  <div className="flex flex-col bg-white rounded-xl border shadow-sm p-4 md:p-5 dark:bg-neutral-800 dark:border-neutral-700">
    <div className="flex items-center gap-x-2">
      <span className={`size-8 inline-flex justify-center items-center rounded-full ${color}`}>
        <Icon className="size-4 text-white" />
      </span>
      <h3 className="text-xs font-medium uppercase text-gray-600 dark:text-neutral-400">{label}</h3>
    </div>
    <div className="mt-3">
      <h2 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">{value}</h2>
      {subtext && (
        <p className="text-sm text-gray-600 dark:text-neutral-400 mt-1">{subtext}</p>
      )}
    </div>
  </div>
);