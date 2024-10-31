import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Sidebar2 } from "./components/RetractingSideBar";
import LoginPage from "./components/login";
import Dashboard from "./components/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderTable from "./components/orders"
import Navbar from "./components/navbar";


function App() {
  const [count, setCount] = useState(0);

  // Add state to control whether to show login or main content
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login page as home page */}
        <Route path="/" element={<LoginPage />} />

        {/* Main layout with sidebar and dashboard at /dashboard */}
        <Route
          path="/dashboard"
          element={
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
          }
        />
        <Route
          path="/orders"
          element={
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
          }
        />
       
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

