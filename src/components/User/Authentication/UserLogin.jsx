import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log("Email login attempted with:", email, password);
  };

  const handleGoogleLogin = () => {
    console.log("Google login attempted");
  };

  return (
    <>
      <Breadcrumb thick={true} />
      <div className="min-h-screen flex items-start justify-center bg-gray-100 pt-20">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="space-y-6">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Sign In to Your Account
            </h2>
            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-150 ease-in-out"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
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
              <span>Continue with Google</span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleEmailLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-150 ease-in-out"
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
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-150 ease-in-out"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-sm text-gray-700 hover:text-gray-900 transition-all"
                >
                  Forgot Password?
                </button>
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-transform transform hover:scale-105"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/user/signup")}
                  className="text-gray-800 hover:text-blue-500 transition-all"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
