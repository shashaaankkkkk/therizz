import React from 'react';
import icons from '../utils/utils';

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        {/* Centered Image */}
        <img 
          src={icons.notfound} 
          alt="404 Image" 
          className="mx-auto mb-8 w-62 h-62  object-contain"
        />
        
        {/* Error Message */}
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Page Not Found</p>
        
        {/* Go Back Button */}
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
