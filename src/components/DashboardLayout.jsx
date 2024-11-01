import React, { useState } from 'react';
import { 
  Menu, 
  Home,
  Users,
  Settings,
  BarChart3,
  Package,
  ShoppingCart,
  DollarSign,
  Bell,
  Search,
  User,
  Box,
  Truck,
  Tag,
  MessageSquare
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

// Sample data for charts
const salesData = [
  { name: 'Jan', sales: 4000, orders: 240 },
  { name: 'Feb', sales: 3000, orders: 198 },
  { name: 'Mar', sales: 5000, orders: 305 },
  { name: 'Apr', sales: 4500, orders: 275 },
  { name: 'May', sales: 6000, orders: 410 },
  { name: 'Jun', sales: 5500, orders: 385 }
];

const categoryData = [
  { name: 'Electronics', value: 35 },
  { name: 'Clothing', value: 25 },
  { name: 'Books', value: 15 },
  { name: 'Home', value: 25 }
];

const recentOrders = [
  { id: '#12345', customer: 'John Doe', status: 'Delivered', amount: '$239.99', date: '2024-03-15' },
  { id: '#12346', customer: 'Jane Smith', status: 'Processing', amount: '$129.99', date: '2024-03-14' },
  { id: '#12347', customer: 'Bob Wilson', status: 'Pending', amount: '$349.99', date: '2024-03-14' },
  { id: '#12348', customer: 'Alice Brown', status: 'Shipped', amount: '$89.99', date: '2024-03-13' },
];

// Components
const DashboardContext = React.createContext();

const NavItem = ({ icon: Icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm w-full ${
      active 
        ? 'bg-gray-100 text-blue-600 dark:bg-neutral-700 dark:text-blue-500' 
        : 'text-gray-700 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700'
    }`}
  >
    <Icon className="size-4" />
    {label}
  </button>
);

const StatCard = ({ label, value, icon: Icon, color, subtext }) => (
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

const OrderTable = ({ orders }) => (
  <div className="bg-white rounded-xl border shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
    <div className="px-6 py-4 border-b border-gray-200 dark:border-neutral-700">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">Recent Orders</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead className="bg-gray-50 dark:bg-neutral-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-neutral-300">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-neutral-400">{order.customer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                  order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                  order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                  order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-neutral-400">{order.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-neutral-400">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SalesChart = () => (
  <div className="bg-white rounded-xl border shadow-sm p-4 dark:bg-neutral-800 dark:border-neutral-700">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-4">Sales dashboard</h3>
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

const OrdersChart = () => (
  <div className="bg-white rounded-xl border shadow-sm p-4 dark:bg-neutral-800 dark:border-neutral-700">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-4">Orders Trend</h3>
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const CategoryChart = () => (
  <div className="bg-white rounded-xl border shadow-sm p-4 dark:bg-neutral-800 dark:border-neutral-700">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-4">Sales by Category</h3>
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={categoryData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="value" fill="#8b5cf6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="space-y-6">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <StatCard 
        label="Total Sales" 
        value="$24,780" 
        icon={DollarSign} 
        color="bg-blue-600"
        subtext="+12.4% from last month"
      />
      <StatCard 
        label="Orders" 
        value="1,428" 
        icon={ShoppingCart} 
        color="bg-purple-600"
        subtext="85 orders today"
      />
      <StatCard 
        label="Customers" 
        value="9,242" 
        icon={Users} 
        color="bg-green-600"
        subtext="+8.1% new customers"
      />
      <StatCard 
        label="Products" 
        value="542" 
        icon={Package} 
        color="bg-orange-600"
        subtext="12 out of stock"
      />
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <SalesChart />
      <OrdersChart />
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <OrderTable orders={recentOrders} />
      </div>
      <CategoryChart />
    </div>
  </div>
);

const Products = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">Products Management</h2>
    {/* Add product management content */}
  </div>
);

const Orders = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">Orders Management</h2>
    <OrderTable orders={recentOrders} />
  </div>
);

const Customers = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">Customer Management</h2>
    {/* Add customer management content */}
  </div>
);

const Analytics = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">Analytics</h2>
    <div className="grid lg:grid-cols-2 gap-6">
      <SalesChart />
      <OrdersChart />
      <CategoryChart />
    </div>
  </div>
);

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

{/* Previous imports remain the same until Sidebar component */}

{/* ... Previous code remains the same until Sidebar component ... */}

const Sidebar = ({ isOpen, onClose }) => {
    const { currentPage, setCurrentPage } = React.useContext(DashboardContext);
    
    return (
      <div
        className={`fixed inset-y-0 start-0 z-[60] w-[260px] bg-white border-e border-gray-200 transform transition-transform duration-300 dark:bg-neutral-800 dark:border-neutral-700 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-neutral-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Store Admin</h2>
          </div>
  
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              <NavItem 
                icon={Home} 
                label="Dashboard" 
                active={currentPage === 'Dashboard'} 
                onClick={() => setCurrentPage('Dashboard')}
              />
              <NavItem 
                icon={Package} 
                label="Products" 
                active={currentPage === 'products'} 
                onClick={() => setCurrentPage('products')}
              />
              <NavItem 
                icon={ShoppingCart} 
                label="Orders" 
                active={currentPage === 'orders'} 
                onClick={() => setCurrentPage('orders')}
              />
              <NavItem 
                icon={Users} 
                label="Customers" 
                active={currentPage === 'customers'} 
                onClick={() => setCurrentPage('customers')}
              />
              <NavItem 
                icon={BarChart3} 
                label="Analytics" 
                active={currentPage === 'analytics'} 
                onClick={() => setCurrentPage('analytics')}
              />
              <NavItem 
                icon={Settings} 
                label="Settings" 
                active={currentPage === 'settings'} 
                onClick={() => setCurrentPage('settings')}
              />
            </div>
          </nav>
  
          <div className="border-t border-gray-200 dark:border-neutral-700 p-4">
            <a href="#" className="flex items-center gap-x-3 text-sm">
              <img
                src="/api/placeholder/32/32"
                className="rounded-full"
                alt="User"
              />
              <div>
                <span className="block font-medium text-gray-800 dark:text-neutral-200">Admin User</span>
                <span className="block text-gray-600 dark:text-neutral-400">admin@store.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState('dashboard');
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const getPageComponent = () => {
      switch (currentPage) {
        case 'dashboard':
          return <Dashboard />;
        case 'products':
          return <Products />;
        case 'orders':
          return <Orders />;
        case 'customers':
          return <Customers />;
        case 'analytics':
          return <Analytics />;
        case 'settings':
          return <div>Settings Content</div>;
        default:
          return <Dashboard />;
      }
    };
  
    return (
      <DashboardContext.Provider value={{ currentPage, setCurrentPage }}>
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          
          <main className="lg:ml-[260px]">
            {/* Header */}
            <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 dark:bg-neutral-800 dark:border-neutral-700">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center">
                  <button
                    onClick={toggleSidebar}
                    className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                  >
                    <Menu className="size-4" />
                  </button>
                  <h1 className="ml-4 text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
                  </h1>
                </div>
                <DashboardHeader />
              </div>
            </div>
  
            {/* Main Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {getPageComponent()}
              {children}
            </div>
          </main>
        </div>
      </DashboardContext.Provider>
    );
  };
  
  export default DashboardLayout;