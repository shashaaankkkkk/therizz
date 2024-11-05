import React from 'react';
import icons from '../utils/utils';

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black">
      <div className="text-center px-6 py-10">
        {/* Centered Image */}
        <img 
          src={icons.notfound} 
          alt="404 Image" 
          className="mx-auto mb-8 w-80 h-80 md:w-[30rem] md:h-[30rem] object-contain"
        />
        
        {/* Error Message */}
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Page Not Found</p>
        
        {/* Go Back Button */}
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
