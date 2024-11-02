import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/pages/Dashboard";
import ProductsPage from "./components/Products";
import OrderTable2 from "./components/Orders";
import AddProduct from "./components/AddProduct";
import Settings from "./components/Settings/Settings";
import LoginPage from "./components/Login";
import ForgotPasswordPage from "./components/ForgotPassword";
import ResetPasswordPage from "./components/ResetPassword";
import CustomersPage from "./components/Customers";
import ReviewsPage from "./components/Reviews";


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
