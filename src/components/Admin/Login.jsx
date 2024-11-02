// LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Hardcoded login credentials
    const validEmail = "test@gmail.com";
    const validPassword = "test@1234";

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("isAuthenticated", "true");
      setError("");
      navigate("/admin/dashboard"); // Updated to redirect to /admin/dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-200 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-10 border border-gray-200">
        <div className="flex items-center justify-center gap-3 mb-10">
          <svg
            viewBox="0 0 24 24"
            className="w-10 h-10 text-gray-700"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-3xl font-semibold text-gray-800">
            Admin Login
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")} // Updated path
              className="text-sm text-blue-600 hover:underline focus:outline-none transition"
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Login
          </button>
          {error && (
            <p className="text-red-500 text-center text-sm mt-4">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
