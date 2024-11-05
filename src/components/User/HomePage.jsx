import React from "react";
import bannerImage from "../../assets/banner.jpg";
import ProductGrid from "./BestSelling";
import BrowseProduct from "./BrowseProduct";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div
        className="relative w-full h-[80vh] md:h-[70vh] lg:h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>

        {/* Banner Content */}
        <div className="relative z-10 flex items-center justify-start h-full pl-32 text-white">
          {/* Increased padding-left for more right shift */}
          <div className="max-w-md space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fresh Arrivals Online
            </h1>
            <p className="text-lg md:text-xl font-light">
              Discover Our Newest Collection Today.
            </p>
            <Link to="/user/listing">
              <button className="mt-4 px-6 py-3 bg-gray-800 text-white text-lg rounded-full hover:bg-gray-700 focus:outline-none transition">
                View Collection →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-16 px-6 md:px-16 lg:px-24 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-10">
          {" "}
          {/* Added padding-left for right shift */}
          {/* Free Shipping */}
          <div className="flex flex-col items-start">
            {" "}
            {/* Left aligned */}
            <div className="bg-gray-200 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l1 5h13l1-5h2m-4 5h-6m0 0H9m0 0L6.5 15H19a2 2 0 01-2 2H8a2 2 0 01-2-2H4m3 0H5m7 0h1.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">
              Upgrade your style today with FREE shipping on all orders! Enjoy
              fast delivery right to your doorstep.
            </p>
          </div>
          {/* Satisfaction Guarantee */}
          <div className="flex flex-col items-start">
            {" "}
            {/* Left aligned */}
            <div className="bg-gray-200 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.25 7.5L7.5 12l3.75 4.5m5.25-9L16.5 12l3.75 4.5m-4.75 2A2.75 2.75 0 0112 18h0a2.75 2.75 0 01-2.75-2.75V9.75A2.75 2.75 0 0112 7h0a2.75 2.75 0 012.75 2.75v5.5a2.75 2.75 0 01-2.75 2.75"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Satisfaction Guarantee
            </h3>
            <p className="text-gray-600">
              Shop confidently with our Satisfaction Guarantee. Love it or get a
              refund.
            </p>
          </div>
          {/* Secure Payment */}
          <div className="flex flex-col items-start">
            {" "}
            {/* Left aligned */}
            <div className="bg-gray-200 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18.5c-3.038 0-5.5-2.462-5.5-5.5S8.962 7.5 12 7.5s5.5 2.462 5.5 5.5-2.462 5.5-5.5 5.5zm0-10c-2.485 0-4.5 2.015-4.5 4.5S9.515 17.5 12 17.5s4.5-2.015 4.5-4.5S14.485 8.5 12 8.5zM8 12H4m16 0h-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">
              Your security is our priority. Enjoy secure transactions with us.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ProductGrid />
        <BrowseProduct />
      </div>
    </div>
  );
};

export default HomePage;
