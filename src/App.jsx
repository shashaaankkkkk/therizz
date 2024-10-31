import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Sidebar2 } from "./components/RetractingSideBar";
import LoginPage from "./components/login";
import Dashboard from "./components/dashboard";
import ProductsPage from "./components/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderTable from "./components/orders";;
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // DashboardLayout with Sidebar and Navbar included
  const DashboardLayout = ({ children }) => (
    <div className="flex h-screen">
      {/* Sidebar component */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar2 />
      </div>

      {/* Main content area with Navbar and children */}
      <div className="flex-1 ml-64">
        <Navbar />
        {children}
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* Login page as home page */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard route */}
        <Route
          path="/dashboard"
          element={
            <>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
            </>
          }
        />

        {/* Products route */}
        <Route
          path="/products"
          element={
            <>
              <DashboardLayout>
                <ProductsPage />
              </DashboardLayout>
              <div className="flex h-screen">
                {/* Sidebar component */}
                <div className="fixed left-0 top-0 h-full">
                  <Sidebar2 />
                </div>

                {/* Main content area with Navbar and Dashboard */}
                <div className="flex-1 ml-64">
                  <Navbar />
                  <Dashboard />
                </div>
              </div>
            </>
          }
        />

        {/* Orders route */}
        <Route
          path="/orders"
          element={
            <>
            <div className="flex h-screen">
              {/* Sidebar component */}
              <div className="fixed left-0 top-0 h-full">
                <Sidebar2 />
              </div>

              {/* Main content area with Navbar and OrderTable */}
              <div className="flex-1 ml-64">
                <Navbar />
                <OrderTable />
              </div>
            </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
