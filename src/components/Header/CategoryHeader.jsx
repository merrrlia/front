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
            <div className="p-4 flex justify-center space-x-6 overflow-x-auto text-lg font-semibold text-gray-700">
                {categories.map((category) => (
                    <span
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`cursor-pointer transition-all duration-300 ${
                            selectedCategory === category
                                ? "text-[#8B4513] border-b-2 border-[#8B4513]"
                                : "text-gray-500 hover:text-gray-800"
                        }`}
                    >
                        {category}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default CategoryHeader;
