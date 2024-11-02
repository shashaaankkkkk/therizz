import React, { useState } from "react";
import icons from "../../utils/utils";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      // Simulate password reset success (replace with actual API call)
      setMessage("Your password has been reset successfully.");
      setError("");
      // Optionally redirect or clear fields here
    } else {
      setError("Passwords do not match. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-200 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-10 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Reset Password
        </h2>
        <p className="text-sm text-gray-600 mb-10 text-center">
          Please enter your new password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              New Password
            </label>
            <div className="relative">
              <input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={handleChangeNewPassword}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition"
                placeholder="Enter your new password"
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-3 text-gray-500 focus:outline-none"
              >
                {showNewPassword ? (
                  <img src={icons.open} className="w-5 h-5" />
                ) : (
                  <img src={icons.closed} className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition"
                placeholder="Confirm your new password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-500 focus:outline-none"
              >
                {showConfirmPassword ? (
                  <img src={icons.open} className="w-5 h-5" />
                ) : (
                  <img src={icons.closed} className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Reset Password
          </button>

          {message && (
            <p className="text-green-500 text-center text-sm mt-4">{message}</p>
          )}
          {error && (
            <p className="text-red-500 text-center text-sm mt-4">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
