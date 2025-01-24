import React, { useState, useEffect } from "react";

const CategoryHeader = ({ categories, selectedCategory, onSelectCategory }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`sticky top-0 z-40 w-full transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-md"
                    : "bg-white"
            }`}
        >
            <div className="p-4 flex justify-center space-x-4 overflow-x-auto">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                            selectedCategory === category
                                ? "bg-[#8B4513] text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryHeader;
