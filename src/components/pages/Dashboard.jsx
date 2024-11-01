import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import {salesData, categoryData, recentOrders} from "../../data/MockData"

// Simple Card components implementation
const Card = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-neutral-800 rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ className = '', ...props }) => (
  <div className={`p-6 pb-0 ${className}`} {...props} />
);

const CardTitle = ({ className = '', ...props }) => (
  <h3 className={`font-semibold text-lg text-gray-900 dark:text-white ${className}`} {...props} />
);

const CardContent = ({ className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);

const StatCard = ({ title, value, icon: Icon, trend }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-neutral-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{value}</h3>
          {trend && (
            <p className={`text-sm mt-1 ${trend.type === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend.value}% {trend.type === 'up' ? '↑' : '↓'} from last month
            </p>
          )}
        </div>
        <div className="bg-blue-100 p-3 rounded-full dark:bg-blue-900">
          <Icon className="size-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const SalesChart = () => (
  <Card>
    <CardHeader>
      <CardTitle>Sales Overview</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#2563eb" />
            <Line type="monotone" dataKey="orders" stroke="#7c3aed" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

const CategoryChart = () => {
  const COLORS = ['#2563eb', '#7c3aed', '#db2777', '#ea580c'];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const RecentOrdersTable = () => (
  <Card>
    <CardHeader>
      <CardTitle>Recent Orders</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-800 dark:text-neutral-400">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="bg-white border-b dark:bg-neutral-900 dark:border-neutral-800"
              >
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${order.status === 'Delivered' && 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'}
                    ${order.status === 'Processing' && 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'}
                    ${order.status === 'Pending' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'}
                    ${order.status === 'Shipped' && 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'}
                  `}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.amount}</td>
                <td className="px-6 py-4">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">Dashboard</h2>
      
      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$28,500"
          icon={DollarSign}
          trend={{ type: 'up', value: 12.5 }}
        />
        <StatCard
          title="Total Orders"
          value="1,413"
          icon={ShoppingBag}
          trend={{ type: 'up', value: 8.2 }}
        />
        <StatCard
          title="Total Customers"
          value="846"
          icon={Users}
          trend={{ type: 'up', value: 5.1 }}
        />
        <StatCard
          title="Conversion Rate"
          value="3.24%"
          icon={TrendingUp}
          trend={{ type: 'down', value: 1.8 }}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SalesChart />
        <CategoryChart />
      </div>

      {/* Recent Orders */}
      <RecentOrdersTable />
    </div>
  );
};

export default Dashboard;