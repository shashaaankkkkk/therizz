import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

const UserSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Signup attempted with:", formData);
  };

  const handleGoogleSignup = () => {
    // Add your Google signup logic here
    console.log("Google signup attempted");
  };

  const goToLogin = () => {
    navigate("/user/ulogin");
  };

  return (
    <>
      <Breadcrumb thick={true} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
        <div className="absolute top-10 w-full flex justify-center">
          <div className="max-w-lg w-full space-y-8 p-10 bg-white rounded-2xl shadow-2xl border border-gray-300">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900">
                Create Your Account
              </h2>
            </div>

            <button
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg shadow-md bg-white text-gray-700 hover:bg-gray-100 transition-all duration-200 group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                {/* SVG paths for Google logo */}
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all duration-200"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-600">
                By creating an account, you agree to our{" "}
                <button
                  type="button"
                  className="font-medium text-gray-900 hover:text-gray-700"
                >
                  Terms of Service
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="font-medium text-gray-900 hover:text-gray-700"
                >
                  Privacy Policy
                </button>
                .
              </p>

              <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-200"
              >
                Create Account
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={goToLogin}
                  className="font-medium text-gray-900 hover:text-gray-700"
                >
                  Log in
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
