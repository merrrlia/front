import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryHeader from "./CategoryHeader";
import ItemCard from "./ItemCard";
import SelectedItemDetails from "./SelectedItemDetails";

const Menu = ({ cart, setCart }) => {
    const [menu, setMenu] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("Tea");
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/menu"
                );
                setMenu(response.data);
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

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const closeDetails = () => {
        setSelectedItem(null);
    };

    const addToCart = (item) => {
        setCart([...cart, item]);
        closeDetails();
    };

    return (
        <div className="relative">
            <CategoryHeader
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                isScrolled={isScrolled}
            />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {menu[selectedCategory]?.map((item) => (
                    <ItemCard
                        key={item.name}
                        item={item}
                        onClick={handleItemClick}
                    />
                ))}
            </div>

            {selectedItem && (
                <SelectedItemDetails
                    item={selectedItem}
                    addToCart={addToCart}
                    closeDetails={closeDetails}
                />
            )}
        </div>
    );
};

export default Menu;
