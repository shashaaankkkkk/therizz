// App.jsx
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
import HomePage from "./components/User/HomePage";
import UserDashboardLayout from "./components/User/UserDashboardLayout";
import FeaturedAromaRange from "./components/User/haha.jsx";
import Footer from "./components/User/Footer";
import HomePage from "./components/User/HomePage.jsx";
import DiscountStrip from "./components/User/Discounthead.jsx";
import UserDashboardLayout from "./components/User/UserDashboardLayout.jsx";
import CartPage from "./components/pages/CartPage.jsx";

// Protected Route wrapper for admin routes
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
        {/* Default route - redirects to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="orders" element={<OrderTable2 />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* User Routes - All wrapped in UserDashboardLayout */}
        <Route path="/user" element={<UserDashboardLayout />}>
          <Route path="homepage" element={<HomePage />} />
          <Route path="aroma" element={<FeaturedAromaRange />} />
          {/* Add more user routes here as needed */}
          {/* Example:
          <Route path="products" element={<UserProducts />} />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          */}
        </Route>

        {/* Catch all undefined routes - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
