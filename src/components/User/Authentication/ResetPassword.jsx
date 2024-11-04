import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log("Reset password attempted with:", newPassword, confirmPassword);
  };

  return (
    <>
      <Breadcrumb thick={true} />
      <div className="h-[80vh] flex items-start justify-center bg-gray-100 pt-20">
        {" "}
        <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-lg shadow-md border border-gray-300">
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Reset Password
          </h2>

          <form onSubmit={handleResetPassword} className="space-y-6 mt-4">
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                id="new-password"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-150 ease-in-out"
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-150 ease-in-out"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-transform transform hover:scale-105"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
