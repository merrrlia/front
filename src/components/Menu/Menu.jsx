import React, { useState, useEffect } from "react";
import { MenuService } from "../../services/MenuService";
import CategoryHeader from "../Header/CategoryHeader";
import ItemCard from "./ItemCard";
import SelectedItemDetails from "./SelectedItemDetails";

const Menu = ({ cart, setCart }) => {
    const [menu, setMenu] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const menuData = await MenuService.getMenu();
                setMenu(menuData);
                setFilteredMenu(menuData);
            } catch (error) {
                console.error("Failed to fetch menu:", error);
            }
        };
        fetchMenu();
    }, []);

    // Фильтрация по категориям
    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredMenu(menu);
        } else {
            setFilteredMenu(menu.filter((item) => item.category === category));
        }
    };

    return (
        <div>
            <CategoryHeader
                categories={["All", "Coffee", "Tea", "Desserts"]}
                selectedCategory={selectedCategory}
                onSelectCategory={filterByCategory}
            />
            <div className="p-6 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredMenu.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedItem(item)}
                    />
                ))}
            </div>

            {selectedItem && (
                <SelectedItemDetails
                    item={selectedItem}
                    addToCart={(item) => setCart([...cart, item])}
                    closeDetails={() => setSelectedItem(null)}
                />
            )}
        </div>
    );
};

export default Menu;
