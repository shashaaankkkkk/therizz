import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="w-full bg-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Outer Flexbox Container for left and right alignment */}
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          {/* Left Side: Text Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl -mt-1">
              Join Our Newsletter
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>

          {/* Right Side: Form Section */}
          <form
            onSubmit={handleSubmit}
            className="flex w-full sm:w-auto items-center space-x-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full max-w-xs rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-sm placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
