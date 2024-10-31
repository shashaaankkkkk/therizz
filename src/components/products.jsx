import React, { useState } from "react";


const ProductsPage = () => {
  const [products] = useState([
    {
      id: 1,
      image: "/product-1.png",
      name: "Raw Black T-Shirt Lineup",
      sku: "47514501",
      price: 75.0,
      stock: "In Stock",
      categories: ["T-shirt", "Men"],
    },
    {
      id: 2,
      image: "/product-2.png",
      name: "Classic Monochrome Tees",
      sku: "47514501",
      price: 35.0,
      stock: "In Stock",
      categories: ["T-shirt", "Men"],
    },
    // Add more products here
  ]);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            Add product
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products"
              className="pl-8 pr-4 py-2 border rounded-md w-64"
            />
            <svg
              className="absolute left-2 top-2.5 h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-left">TL</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">SKU</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Stock</th>
              <th className="py-3 px-4 text-left">Categories</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-8 h-8 object-cover"
                  />
                </td>
                <td className="py-3 px-4 font-medium">{product.name}</td>
                <td className="py-3 px-4">{product.sku}</td>
                <td className="py-3 px-4">${product.price.toFixed(2)}</td>
                <td className="py-3 px-4">{product.stock}</td>
                <td className="py-3 px-4">{product.categories.join(", ")}</td>
                <td className="py-3 px-4">
                  <button className="hover:bg-gray-100 p-1 rounded-full">
                    ...
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 mt-4">
        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
          &lt;
        </button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
          1
        </button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
          2
        </button>
        <span>...</span>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
          23
        </button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
          24
        </button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
