import React, { useState } from "react";

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    initials: "AN",
    fullName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Account Details</h2>
      <div className="mb-8 flex justify-center">
        <span className="inline-block w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-medium animate-pulse">
          {formData.initials}
        </span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm text-gray-600">
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition duration-200"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition duration-200"
          />
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
