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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { email, password } = formData;

  //   // Hardcoded login credentials
  //   const validEmail = "test@gmail.com";
  //   const validPassword = "test@1234";

  //   if (email === validEmail && password === validPassword) {
  //     setError("");
  //     navigate("/dashboard");
  //   } else {
  //     setError("Invalid email or password");
  //   }
  // };

  const handleSubmit = (e) => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-md p-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-xl font-medium">Admin</span>
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
              // required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
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
              // required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
          >
            Login
          </button>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
