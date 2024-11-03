import React, { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import icons from "../../utils/utils";

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      rating: 4.5,
      image: icons.BestSelling1,
      description:
        "High-quality wireless headphones with noise cancellation and premium sound quality.",
      reviews: 128,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      rating: 4.8,
      image: icons.BestSelling2,
      description:
        "Advanced fitness tracking with heart rate monitoring and smartphone notifications.",
      reviews: 245,
    },
    {
      id: 3,
      name: "Professional Camera",
      price: 899.99,
      rating: 4.7,
      image: icons.BestSelling3,
      description:
        "Professional-grade camera with advanced features for photography enthusiasts.",
      reviews: 89,
    },
    {
      id: 4,
      name: "Laptop Pro",
      price: 1299.99,
      rating: 4.9,
      image: icons.BestSelling4,
      description:
        "Powerful laptop for professionals with high-performance specifications.",
      reviews: 167,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalf key={`star-half`} className="text-yellow-400" />);
    }

    return stars;
  };

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Shop Our Best Selling Products
          </h2>
          <p className="mt-4 text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            faucibus massa dignissim tempus.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="relative cursor-pointer group"
                onClick={() => openModal(product)}
                onKeyPress={(e) => e.key === "Enter" && openModal(product)}
                role="button"
                tabIndex={0}
                aria-label={`View details of ${product.name}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1560393464-5c69a73c5770";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-gray-600">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <FiShoppingCart className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 id="modal-title" className="text-2xl font-bold">
                    {selectedProduct.name}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                </div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-96 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1560393464-5c69a73c5770";
                  }}
                />
                <div className="space-y-4">
                  <p className="text-gray-600">{selectedProduct.description}</p>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {renderStars(selectedProduct.rating)}
                    </div>
                    <span className="ml-2 text-gray-600">
                      ({selectedProduct.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">
                      ${selectedProduct.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2"
                      aria-label={`Add ${selectedProduct.name} to cart`}
                    >
                      <FiShoppingCart />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
