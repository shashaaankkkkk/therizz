import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Sidebar2 } from "./components/RetractingSideBar";
import LoginPage from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  // Add state to control whether to show login or main content
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login page as home page */}
        <Route path="/" element={<LoginPage />} />

        {/* Main layout with sidebar at /dashboard */}
        <Route
          path="/dashboard"
          element={
            <div className="fixed left-0 top-0 h-full">
              <Sidebar2 />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
