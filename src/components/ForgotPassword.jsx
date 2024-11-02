import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate password reset request (replace with actual API call)
    if (email) {
      setMessage("A password reset link has been sent to your email.");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-200 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-10 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-600 mb-10 text-center">
          Enter your email address, and we'll send you a link to reset your
          password.
        </p>

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
              type="email"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Send Reset Link
          </button>

          {message && (
            <p className="text-green-500 text-center text-sm mt-4">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
