import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, InformationCircleIcon, KeyIcon } from "@heroicons/react/solid";

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
            className={`flex items-center px-3 py-1 rounded-full font-medium transition-colors duration-200 ${
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
        {/* Sign In Button */}
        <Link
          to="/auth"
          className="flex items-center px-4 py-2 bg-beige-500 text-white rounded-lg hover:bg-beige-600 transition-colors"
        >
          {/* Icon Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          Sign In
        </Link>

        {/* About Us Button */}
        <Link
          to="/about"
          className="flex items-center px-4 py-2 bg-beige-400 text-white rounded-lg hover:bg-beige-500 transition-colors"
        >
          {/* Icon Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          About Us
        </Link>

        {/* Cart Button */}
        <Link
          to="/cart"
          className="flex items-center px-4 py-2 bg-beige-600 text-white rounded-lg hover:bg-beige-700 transition-colors"
        >
          {/* Icon Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg> ({categories.length})
        </Link>
      </div>
    </div>
  );
};

export default CategoryHeader;