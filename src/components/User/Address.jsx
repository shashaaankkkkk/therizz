import React, { useState } from "react";

const AddressPage = () => {
  const [formData, setFormData] = useState({
    street: "2436 Naples Avenue",
    city: "Panama City",
    state: "FL",
    zipCode: "32405",
    country: "United States",
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
    <div className="p-6 bg-gray-50/50">
      <h2 className="text-lg font-medium text-gray-900 mb-8">
        Shipping Address
      </h2>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="space-y-2">
          <label htmlFor="street" className="block text-sm text-gray-600">
            Street Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-300"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="city" className="block text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="state" className="block text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="zipCode" className="block text-sm text-gray-600">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="block text-sm text-gray-600">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-300"
            />
          </div>
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
  );
};

export default AddressPage;
