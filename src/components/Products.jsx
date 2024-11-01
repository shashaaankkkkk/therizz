import React, { useState } from "react";
import icons from "../utils/utils";

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add searchQuery state
  const [products] = useState([
    {
      id: 1,
      image: icons.image1,
      name: "Raw Black T-Shirt Lineup",
      sku: "47514501",
      price: 75.0,
      stock: "In Stock",
      categories: ["T-shirt", "Men"],
    },
    {
      id: 8,
      image: icons.image,
      name: "Sleek and Cozy Black",
      sku: "47514501",
      price: 39.0,
      stock: "In Stock",
      categories: ["T-shirt", "Men"],
    },
    {
      id: 2,
      image: icons.image2,
      name: "Classic Monochrome Tees",
      sku: "47514501",
      price: 35.0,
      stock: "In Stock",
      categories: ["T-shirt", "Men"],
    },
    {
      id: 3,
      image: icons.image3,
      name: "Monochromatic Wardrobe",
      sku: "47514501",
      price: 27.0,
      stock: "In Stock",
      categories: ["T-shirt"],
    },
    {
      id: 4,
      image: icons.image4,
      name: "Essential Neutrals",
      sku: "47514501",
      price: 22.0,
      stock: "In Stock",
      categories: ["T-shirt", "Raw"],
    },
    {
      id: 5,
      image: icons.image5,
      name: "UTRAANET Black",
      sku: "47514501",
      price: 43.0,
      stock: "In Stock",
      categories: ["T-shirt", "Trend"],
    },
    {
      id: 6,
      image: icons.image6,
      name: "Elegant Ebony Sweatshirts",
      sku: "47514501",
      price: 57.0,
      stock: "In Stock",
      categories: ["Hoodie", "Men"],
    },
    {
      id: 7,
      image: icons.image7,
      name: "MOCKUP Black",
      sku: "47514501",
      price: 30.0,
      stock: "In Stock",
      categories: ["T-shirt", "Men"],
    },
    // Add more products here
  ]);

  // Step 2: Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="flex gap-4">
          <a
            href="/products/add"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Add product
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products"
              value={searchQuery} // Bind search input value
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
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
              <th className="py-3 px-4 text-left">
                <img
                  src={icons.Sort}
                  alt="Sort Icon"
                  className="inline-block w-7 h-7"
                />
              </th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">SKU</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Stock</th>
              <th className="py-3 px-4 text-left">Categories</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Step 3: Map filtered products instead of original products */}
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="py-7 px-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-13 h-13 object-cover"
                  />
                </td>
                <td className="py-7 px-6 font-medium">{product.name}</td>
                <td className="py-7 px-6">{product.sku}</td>
                <td className="py-7 px-6">${product.price.toFixed(2)}</td>
                <td className="py-7 px-6">{product.stock}</td>
                <td className="py-7 px-6">{product.categories.join(", ")}</td>
                <td className="py-7 px-6">
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
