import React, { useState, useEffect } from "react";
import CategoryHeader from "./CategoryHeader";
import ItemCard from "./ItemCard";
import SelectedItemDetails from "./SelectedItemDetails";
import { MenuService } from "../../services/MenuService";

const Menu = ({ cart, setCart }) => {
    const [menu, setMenu] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Coffee");
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const menuData = await MenuService.getMenu();
                setMenu(menuData);
            } catch (error) {
                console.error("Failed to fetch menu:", error);
            }
        };
        fetchMenu();
    }, []);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
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
                categories={["Coffee"]}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                isScrolled={isScrolled}
            />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {menu.map((item) => (
                    <ItemCard
                        key={item.id}
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
