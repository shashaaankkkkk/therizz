// components/Dashboard.jsx
import React from "react";
import TotalSalesChart from "./TotalSalesChart";
import CustomersChart from "./CustomersChart";
import OrdersChart from "./OrdersChart";
import BestSellingChart from "./BestSellingChart";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Top row with Total Sales, Customers, Orders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Sales</h2>
          <TotalSalesChart />
        </div>
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Customers</h2>
          <CustomersChart />
        </div>
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Orders</h2>
          <OrdersChart />
        </div>
      </div>

      {/* Bottom row with Best Selling and Recent Orders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded shadow-md h-auto">
          <h2 className="text-xl font-semibold mb-4">Best Selling</h2>
          <BestSellingChart />
          <div className="mt-4 text-sm text-gray-500">
            {/* Add any additional info you want here */}
            Top-selling products of the week are shown here with sales data.
          </div>
        </div>
        <div className="p-6 bg-white rounded shadow-md h-auto">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
