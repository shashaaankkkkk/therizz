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
    <div className="p-6 bg-gray-50/50 flex justify-center">
      <div className="w-full max-w-xl">
        <h2 className="text-lg font-medium text-gray-900 mb-8">
          Account Details
        </h2>

        <div className="mb-8">
          <span className="inline-block w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg font-medium">
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
              className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-300"
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
              className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-300"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
