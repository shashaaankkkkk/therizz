import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '../../data/MockData';

export const SalesChart = () => (
  <div className="bg-white rounded-xl border shadow-sm p-4 dark:bg-neutral-800 dark:border-neutral-700">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-4">Sales Dashboard</h3>
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sales" stroke="#3b82f6" fill="#93c5fd" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);