import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin Components
import DashboardLayout from "./components/Admin/DashboardLayout";
import Dashboard from "./components/pages/Dashboard";
import ProductsPage from "./components/Admin/Products";
import AddProduct from "./components/Admin/AddProduct";
import OrderTable from "./components/Admin/Orders";
import CustomersPage from "./components/Admin/Customers";
import ReviewsPage from "./components/Admin/Reviews";
import Settings from "./components/Settings/Settings";
import LoginPage from "./components/Admin/Login";
import ForgotPasswordPage from "./components/Admin/ForgotPassword";
import ResetPasswordPage from "./components/Admin/ResetPassword";

// User Components
import UserDashboardLayout from "./components/User/UserDashboardLayout";
import HomePage from "./components/User/HomePage";
import CartPage from "./components/pages/CartPage";
import ProductDetail from "./components/User/ProductDetail";
import Listing from "./components/User/Listing";
import Checkout from "./components/User/Checkout";
import UserLogin from "./components/User/Authentication/UserLogin";
import UserSignup from "./components/User/Authentication/UserSignIn";
import OrderSuccess from "./components/User/PaymentDone";
import ForgotPassword from "./components/User/Authentication/UserForgotPassword";
import ResetPassword from "./components/User/Authentication/ResetPassword";

// User Profile Components
import CustomerProfileLayout from "./components/User/CustProfileLayout";
import OrderHistory from "./components/User/CustOrders";
import AddressPage from "./components/User/Address";
import Wishlist from "./components/User/Wishlist";
import AccountDetails from "./components/User/AccountDetails";
import PasswordChange from "./components/User/Password";
import EmptyOrderHistory from "./components/User/EmptyOrders";

// Error Component
import NotFoundPage from "./components/Error404";

// Protected Route wrapper for admin routes
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route - redirects to user homepage */}
        <Route path="/" element={<Navigate to="/user/home" replace />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Admin Routes (Protected) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="orders" element={<OrderTable />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* User Dashboard Routes */}
        <Route path="/user" element={<UserDashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="listing" element={<Listing />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="signup" element={<UserSignup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="order-success" element={<OrderSuccess />} />
        </Route>

        {/* User Profile Routes */}
        <Route path="/profile" element={<CustomerProfileLayout />}>
          <Route path="orders" element={<OrderHistory />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="address" element={<AddressPage />} />
          <Route path="account" element={<AccountDetails />} />
          <Route path="change-password" element={<PasswordChange />} />
          <Route path="empty-orders" element={<EmptyOrderHistory />} />
        </Route>

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
