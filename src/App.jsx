import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Sidebar2 } from "./components/RetractingSideBar";
import LoginPage from "./components/login";
import Dashboard from "./components/dashboard";
import ProductsPage from "./components/products";
import AddProduct from "./components/AddProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderTable from "./components/orders";
import Navbar from "./components/navbar";
import DashboardLayout from "./components/DashboardLayout";
function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

<<<<<<< HEAD
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

=======
  // Create a layout component to reuse sidebar structure
  // const DashboardLayout = ({ children }) => (
  //   <div className="flex h-screen">
  //     <div className="fixed left-0 top-0 h-full w-64">
  //       <Sidebar2 />
  //     </div>
  
  //     <div className="flex-1 ml-64">
  //       <Navbar />
  //       <div className="max-w max-h flex items-center justify-center border border-gray-300 bg-white rounded-md"> {/* Rounded square */}
  //       {children}
  //     </div>
  //     </div>
  //   </div>
  // );
  
>>>>>>> f25d027 (dashboard layout change)
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* Login page as home page */}
    //     <Route path="/" element={<LoginPage />} />

<<<<<<< HEAD
        {/* Dashboard route */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />

        {/* Products routes */}
        <Route
          path="/products"
          element={
            <DashboardLayout>
              <ProductsPage />
            </DashboardLayout>
          }
        />

        {/* Add Product route */}
        <Route
          path="/products/add"
          element={
            <DashboardLayout>
              <AddProduct />
            </DashboardLayout>
          }
        />

        {/* Orders route */}
        <Route
          path="/orders"
          element={
            <DashboardLayout>
              <OrderTable />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
=======
    //     {/* Dashboard route */}
    //     <Route
    //       path="/dashboard"
    //       element={
    //         <>
    //         <DashboardLayout>

    //         </DashboardLayout>
    //         </>
    //       }
    //     />

    //     {/* Products route */}
    //     <Route
    //       path="/products"
    //       element={
    //         <>
    //           <DashboardLayout>
    //             <ProductsPage />
    //           </DashboardLayout>
             
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/orders"
    //       element={
    //         <>
    //          <DashboardLayout>
    //         <OrderTable/>
    //         </DashboardLayout>
           
    //         </>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
    <><DashboardLayout></DashboardLayout>
    </>
>>>>>>> f25d027 (dashboard layout change)
  );
}

export default App;
