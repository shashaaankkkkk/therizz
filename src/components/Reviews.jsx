import React, { useState } from "react";
import icons from "../utils/utils";

const ReviewsPage = () => {
  // Sample reviews data
  const initialReviews = [
    {
      id: "EH",
      name: "Esther Howard",
      review:
        "Completed the task and added the required documentation, can someone please ...",
    },
    {
      id: "WW",
      name: "Wade Warren",
      review:
        "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers.",
    },
    {
      id: "BS",
      name: "Brooklyn Simmons",
      review:
        "Twenty 30-second applications within half an hour is well in excess.",
    },
    {
      id: "RF",
      name: "Robert Fox",
      review:
        "An interesting implication of the 2007 study concerns the use of hand sanitizers.",
    },
    {
      id: "DR",
      name: "Dianne Russell",
      review:
        "I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults.",
    },
    {
      id: "RE",
      name: "Ralph Edwards",
      review:
        "The principal alcohol in Purell hand sanitizer (to take the most talked-about brand)",
    },
    {
      id: "TW",
      name: "Theresa Webb",
      review:
        "Alcohol based exposures through inadvertently consuming hand sanitize",
    },
    {
      id: "AM",
      name: "Arlene McCoy",
      review:
        "I'm grateful for the supportive work environment during personal challenges.",
    },
  ];

  const [reviews] = useState(initialReviews);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 8;

  // Filter reviews based on search term
  const filteredReviews = reviews.filter(
    (review) =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.review.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = filteredReviews.slice(startIndex, endIndex);

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Reviews</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search reviews"
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-left">
                <img
                  src={icons.Sort}
                  alt="Sort Icon"
                  className="inline-block w-7 h-7"
                />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Review
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentReviews.map((review) => (
              <tr key={review.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    {review.id}
                  </div>
                </td>
                <td className="px-6 py-6">{review.name}</td>
                <td className="px-6 py-6">
                  <div className="max-w-xl truncate">{review.review}</div>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          className="px-3 py-1 border rounded-md disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 border rounded-md ${
                currentPage === page ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className="px-3 py-1 border rounded-md disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewsPage;
