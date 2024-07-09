import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="font-mono flex flex-col items-center justify-center h-screen bg-green-50 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4 sm:mb-8">
        AGRO UDGAM ASSIGNMENT
      </h1>
      <Link
        to="/products"
        className="text-lg sm:text-xl md:text-2xl text-black hover:text-red-900"
      >
        Go to Product Listing Page
      </Link>
    </div>
  );
};

export default HomePage;
