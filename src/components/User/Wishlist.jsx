import React from "react";
import icons from "../../utils/utils";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Raw Black T-Shirt Lineup",
      date: "27 July 2023",
      price: 75.0,
      image: icons.Image1,
    },
    {
      id: 2,
      name: "Essential Neutrals",
      date: "27 July 2023",
      price: 22.0,
      image: icons.Image2,
    },
  ];

  return (
    <div className="p-6 bg-gray-50/50 flex justify-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-lg font-medium text-gray-900 mb-8">Wishlist</h2>

        <div className="space-y-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-50 rounded flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">Added On: {item.date}</p>
                  <button className="text-xs text-gray-600 hover:text-gray-900">
                    Remove Item
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <span className="text-sm font-medium text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
                <button className="px-4 py-1.5 border border-gray-200 rounded text-sm text-gray-900 hover:bg-gray-50">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
