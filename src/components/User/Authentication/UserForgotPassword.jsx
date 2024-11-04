import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetLink = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  return (
    <>
      <Breadcrumb thick={true} />
      <div className="h-[80vh] flex items-start justify-center bg-gray-100 pt-20">
        {" "}
        {/* Adjusted padding-top */}
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg border border-gray-200 mt-0">
          {" "}
          {/* Set margin-top to 0 */}
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Forgot Password
          </h2>
          <p className="text-center text-gray-600">
            Please enter the email address associated with your account.
            We&apos;ll promptly send you a link to reset your password.
          </p>
          <form onSubmit={handleResetLink} className="space-y-6 mt-4">
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

            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-transform transform hover:scale-105"
            >
              Send reset link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
