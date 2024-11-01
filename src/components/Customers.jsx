import React, { useState } from "react";

const CustomersPage = () => {
  // Sample customer data
  const initialCustomers = [
    {
      id: "EH",
      name: "Esther Howard",
      email: "esther.howard@gmail.com",
      address: "8642 Yule Street, Arvada CO 80007",
    },
    {
      id: "WW",
      name: "Wade Warren",
      email: "wade.warren@gmail.com",
      address: "5331 Rexford Court, Montgomery AL 36116",
    },
    {
      id: "BS",
      name: "Brooklyn Simmons",
      email: "brooklyn.simmons@gmail.com",
      address: "2325 Eastridge Circle, Moore OK 73160",
    },
    {
      id: "RF",
      name: "Robert Fox",
      email: "robert.fox@gmail.com",
      address: "2436 Naples Avenue, Panama City FL 32405",
    },
    {
      id: "DR",
      name: "Dianne Russell",
      email: "dianne.russell@gmail.com",
      address: "6095 Terry Lane, Golden CO 80403",
    },
    {
      id: "RE",
      name: "Ralph Edwards",
      email: "ralph.edwards@gmail.com",
      address: "4001 Anderson Road, Nashville TN 37217",
    },
    {
      id: "TW",
      name: "Theresa Webb",
      email: "theresa.webb@gmail.com",
      address: "19141 Pine Ridge Circle, Anchorage AK 99516",
    },
    {
      id: "AM",
      name: "Arlene McCoy",
      email: "arlene.mccoy@gmail.com",
      address: "2613 Cottonwood Street, Anchorage AK 99508",
    },
  ];

  const [customers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 8;

  // Filter customers based on search term
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.address.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
  const startIndex = (currentPage - 1) * customersPerPage;
  const endIndex = startIndex + customersPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, endIndex);

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Customers</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search customers"
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
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Shipping Address
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    {customer.id}
                  </div>
                </td>
                <td className="px-6 py-6">{customer.name}</td>
                <td className="px-6 py-6">{customer.email}</td>
                <td className="px-6 py-6">{customer.address}</td>
                <td className="px-6 py-6">
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

export default CustomersPage;
