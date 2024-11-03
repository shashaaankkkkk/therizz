import React, { useState } from "react";
import icons from "../../utils/utils";

const BrowseProduct = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const featuredProducts = [
    {
      title: "Elegant Ebony Sweatshirts",
      price: "35.00",
      status: "IN STOCK",
      image: icons.image5,
    },
    {
      title: "Sleek and Cozy Black",
      price: "57.00",
      status: "IN STOCK",
      image: icons.image6,
    },
    {
      title: "Raw Black Tees",
      price: "19.00",
      status: "IN STOCK",
      image: icons.image8,
    },
    {
      title: "MOCKUP Black",
      price: "30.00",
      status: "IN STOCK",
      image: icons.image7,
    },
  ];

  const latestProducts = [
    {
      title: "Premium Wireless Headphones",
      price: "299.99",
      status: "IN STOCK",
      rating: 4.5,
      reviews: 128,
      description:
        "High-quality wireless headphones with noise cancellation and premium sound quality.",
      image: icons.image1,
    },
    {
      title: "Smart Fitness Watch",
      price: "199.99",
      status: "IN STOCK",
      rating: 4.8,
      reviews: 245,
      description:
        "Advanced fitness tracking with heart rate monitoring and smartphone notifications.",
      image: icons.BestSelling2,
    },
    {
      title: "Professional Camera",
      price: "899.99",
      status: "IN STOCK",
      rating: 4.7,
      reviews: 89,
      description:
        "Professional-grade camera with advanced features for photography enthusiasts.",
      image: icons.BestSelling3,
    },
    {
      title: "Laptop Pro",
      price: "1299.99",
      status: "IN STOCK",
      rating: 4.9,
      reviews: 167,
      description:
        "Powerful laptop for professionals with high-performance specifications.",
      image: icons.image,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section with Darker Gradient */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-white" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Browse Our Fashion Paradise!
              </h1>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                Step into a world of style and explore our diverse collection of
                clothing categories.
              </p>
              <button className="mt-6 rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:text-base">
                Start Browsing
              </button>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <img
                src={icons.Poncho}
                alt="Featured Product"
                className="h-64 w-auto rounded-lg object-cover sm:h-72 lg:h-96"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Centered Toggle Button with Enhanced Design */}
        <div className="relative mb-12 flex justify-center">
          <div className="relative inline-flex rounded-xl bg-gray-100/50 p-1.5 backdrop-blur-sm">
            <div
              className={`absolute left-1.5 top-1.5 h-9 w-28 transform rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                activeTab === "latest" ? "translate-x-28" : "translate-x-0"
              }`}
            />
            <button
              onClick={() => setActiveTab("featured")}
              className={`relative z-10 w-28 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === "featured"
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab("latest")}
              className={`relative z-10 w-28 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === "latest"
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Latest
            </button>
          </div>
        </div>

        {/* Products Grid with Animation */}
        <div className="relative overflow-hidden">
          <div
            className={`transform transition-transform duration-500 ease-in-out ${
              activeTab === "latest" ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden rounded-md bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900 sm:text-base">
                      {product.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-xs text-gray-500 sm:text-sm">
                        {product.status}
                      </p>
                      <p className="text-sm font-medium text-gray-900 sm:text-base">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Products */}
          <div
            className={`absolute inset-0 transform transition-transform duration-500 ease-in-out ${
              activeTab === "latest" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {latestProducts.map((product, index) => (
                <div
                  key={`latest-${index}`}
                  className="group overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden rounded-md bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-sm font-medium text-gray-900 sm:text-base">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 sm:text-base">
                        ${product.price}
                      </p>
                      <p className="text-xs text-gray-500 sm:text-sm">
                        {product.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseProduct;
