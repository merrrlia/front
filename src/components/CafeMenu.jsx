import React, { useState, useEffect } from "react";
import axios from "axios";

const Menu = () => {
    const [menu, setMenu] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("Tea");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/menu"
                );
                setMenu(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };

        fetchMenuData();
    }, []);

    const categories = Object.keys(menu);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        style={{ width: "200px" }} // Fixed card width
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover object-center"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {item.name}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}

            <CategoryHeader
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                isScrolled={isScrolled}
            />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {menu[selectedCategory]?.map((item, index) => (
                    <div
                        key={item.name}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        style={{ width: "200px" }} // Fixed card width
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover object-center"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {item.name}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// CategoryHeader Component (same as before)
const CategoryHeader = ({
    categories,
    selectedCategory,
    onSelectCategory,
    isScrolled,
}) => {
    return (
        <div
            className={` fixed top-0 left-0 right-0 z-10 flex justify-center space-x-4 py-1 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-md"
                    : "bg-white"
            }`}
        >
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
    );
};

export default Menu;
