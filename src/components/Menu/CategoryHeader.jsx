import React from "react";
import { Link } from "react-router-dom";

const CategoryHeader = ({
  categories,
  selectedCategory,
  onSelectCategory,
  isScrolled,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-4 py-2 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-1 rounded-full font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? "bg-gray-800 text-white"
                : "text-gray-800 hover:bg-gray-300/90"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        {/* Sign Up Button */}
        <Link
          to="/auth"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Sign In
        </Link>

        {/* About Us Button */}
        <Link
          to="/about"
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
        >
          About Us
        </Link>

        {/* Cart Button */}
        <Link
          to="/cart"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Cart ({categories.length})
        </Link>
      </div>
    </div>
  );
};

export default CategoryHeader;