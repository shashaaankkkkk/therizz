import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/pages/Dashboard";
import ProductsPage from "./components/products";
import OrderTable2 from "./components/orders";
import AddProduct from "./components/AddProduct";
import Settings from "./components/Settings/Settings";
import LoginPage from "./components/login";

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
        <Route path="/login" element={<LoginPage />} />

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
        </Route>

        {/* Catch all undefined routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
