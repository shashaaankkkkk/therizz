import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./components/Admin/DashboardLayout";
import Dashboard from "./components/pages/Dashboard";
import ProductsPage from "./components/Admin/Products";
import OrderTable2 from "./components/Admin/Orders";
import AddProduct from "./components/Admin/AddProduct";
import Settings from "./components/Settings/Settings";
import LoginPage from "./components/Admin/Login";
import ForgotPasswordPage from "./components/Admin/ForgotPassword";
import ResetPasswordPage from "./components/Admin/ResetPassword";
import CustomersPage from "./components/Admin/Customers";
import ReviewsPage from "./components/Admin/Reviews";
import Footer from "./components/User/Footer";
import HomePage from "./components/User/HomePage.jsx";
import DiscountStrip from "./components/User/Discounthead.jsx";
import UserDashboardLayout from "./components/User/UserDashboardLayout.jsx";
import CartPage from "./components/pages/CartPage.jsx";

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/dishead" element={<DiscountStrip/>} />
        <Route path="/navbar" element={<UserDashboardLayout/>} />
        
        

        {/* Protected dashboard routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="orders" element={<OrderTable2 />} />
          <Route path="settings" element={<Settings />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          
        </Route>

        {/* Catch all undefined routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
        
      </Routes>
    </Router>
  );
};

export default App;
