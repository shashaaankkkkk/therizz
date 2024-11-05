import React from "react";
import icons from "../../utils/utils";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Raw Black T-Shirt Lineup",
      date: "27 July 2023",
      price: 75.0,
      image: icons.image1,
    },
    {
      id: 2,
      name: "Essential Neutrals",
      date: "27 July 2023",
      price: 22.0,
      image: icons.image2,
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Wishlist</h2>
      <div className="space-y-8">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300"
          >
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">Added On: {item.date}</p>
                <button className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300">
                  Remove Item
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <span className="text-lg font-medium text-gray-800">
                ${item.price.toFixed(2)}
              </span>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
