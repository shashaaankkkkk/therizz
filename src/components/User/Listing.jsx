import React, { useState } from "react";
import icons from "../../utils/utils";
import Breadcrumb from "./Breadcrumb";

const Listing = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(100);
  const [sortOrder, setSortOrder] = useState("Default");

  const categories = [
    "Tshirt",
    "Shirts",
    "Hoodies",
    "Jeans",
    "Cargos",
    "Pants",
  ];

  const colors = ["#3b82f6", "#facc15", "#4ade80", "#a78bfa"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const products = [
    {
      id: 1,
      name: "Classic Monochrome Tee",
      price: 35,
      imageUrl: icons.image2,
      inStock: true,
      category: "Tshirt",
    },
    {
      id: 2,
      name: "Casual Denim Jeans",
      price: 45,
      imageUrl: icons.image3,
      inStock: true,
      category: "Jeans",
    },
    {
      id: 3,
      name: "Stylish Hoodie",
      price: 60,
      imageUrl: icons.image4,
      inStock: true,
      category: "Hoodies",
    },
    {
      id: 4,
      name: "Formal Shirt",
      price: 40,
      imageUrl: icons.image5,
      inStock: false,
      category: "Shirts",
    },
    {
      id: 5,
      name: "Comfortable Cargos",
      price: 55,
      imageUrl: icons.image6,
      inStock: true,
      category: "Cargos",
    },
    {
      id: 6,
      name: "Trendy Pants",
      price: 50,
      imageUrl: icons.image7,
      inStock: true,
      category: "Pants",
    },
    // Add more products as needed
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category],
    );
  };

  const handleColorSelect = (color) => {
    setSelectedColor(selectedColor === color ? null : color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(selectedSize === size ? null : size);
  };

  const handleRemoveFilter = (filter) => {
    if (selectedCategory.includes(filter)) {
      setSelectedCategory(selectedCategory.filter((cat) => cat !== filter));
    } else if (selectedSize === filter) {
      setSelectedSize(null);
    } else if (selectedColor === filter) {
      setSelectedColor(null);
    }
  };

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory.length === 0 ||
          selectedCategory.includes(product.category)) &&
        product.price <= selectedPrice,
    )
    .sort((a, b) => {
      if (sortOrder === "Price - Low to High") return a.price - b.price;
      if (sortOrder === "Price - High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <Breadcrumb />
      <div className="flex flex-col md:flex-row p-4 md:p-8 font-sans bg-white min-h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-lg mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Categories</h2>
          <ul className="space-y-3 mb-6">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-black rounded"
                    onChange={() => handleCategorySelect(category)}
                    checked={selectedCategory.includes(category)}
                  />
                  <span className="ml-3 text-gray-700 font-medium">
                    {category}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Color</h2>
          <div className="flex space-x-3 mb-6">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${selectedColor === color ? "border-black" : "border-gray-300"}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              ></div>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Size</h2>
          <div className="flex space-x-3 mb-6">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`border rounded px-3 py-[5px] text-sm ${selectedSize === size ? "bg-black text-white" : "text-gray-700"}`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Price</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="w-full mb-4"
          />
          <p className="text-gray-700">Up to ${selectedPrice}</p>
        </div>

        {/* Product List */}
        <div className="flex-1 ml-0 md:ml-8">
          {/* Applied Filters */}
          {selectedCategory.length > 0 || selectedColor || selectedSize ? (
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Applied Filters:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedCategory.map((filter, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-3 py-[5px] rounded-full text-gray-700 flex items-center space-x-1 cursor-pointer"
                    onClick={() => handleRemoveFilter(filter)}
                  >
                    <span>{filter}</span>
                    <span className="font-bold text-gray-500">×</span>
                  </span>
                ))}
                {selectedColor && (
                  <span
                    className="bg-gray-200 px-3 py-[5px] rounded-full text-gray-700 flex items-center space-x-1 cursor-pointer"
                    onClick={() => handleRemoveFilter(selectedColor)}
                    style={{ backgroundColor: selectedColor }}
                  >
                    <span>Color</span>
                    <span className="font-bold text-white">×</span>
                  </span>
                )}
                {selectedSize && (
                  <span
                    className="bg-gray-200 px-3 py-[5px] rounded-full text-gray-700 flex items-center space-x-1 cursor-pointer"
                    onClick={() => setSelectedSize(null)}
                  >
                    <span>Size: {selectedSize}</span>
                    <span className="font-bold text-gray-500">×</span>
                  </span>
                )}
              </div>
            </div>
          ) : null}

          {/* Sorting and Results */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-gray-700">
                {filteredProducts.length} results found
              </span>
            </div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded p-[5px] text-black bg-white"
            >
              <option value="Default">Sort By</option>
              <option value="Price - Low to High">Price - Low to High</option>
              <option value="Price - High to Low">Price - High to Low</option>
            </select>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[20px] gap-x-[30px]">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-[5px] ${product.inStock ? "border-b border-black" : "opacity-[0.5]"}`}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className={`w-full h-[300px] object-cover border-b border-black`}
                />
                <div
                  className={`p-[15px] flex flex-col justify-between ${product.inStock ? "text-black" : "text-gray"}`}
                >
                  <h3 className={`text-lg font-semibold`}>{product.name}</h3>
                  <p className={`text-xl font-bold`}>${product.price}</p>
                  <button
                    disabled={!product.inStock}
                    className={`mt-[10px] w-full py-[8px] rounded transition duration-[300ms] ${product.inStock ? "bg-black text-white hover:bg-gray" : "bg-gray cursor-notAllowed"}`}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
