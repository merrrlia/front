import React, { useState, useEffect } from "react";
import { MenuService } from "../../services/MenuService";
import { CartService } from "../../services/CartService";
import CategoryHeader from "../Header/CategoryHeader";
import ItemCard from "./ItemCard";
import SelectedItemDetails from "./SelectedItemDetails";

const Menu = ({ token }) => {
    const [menu, setMenu] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedItem, setSelectedItem] = useState(null);
    const [cart, setCart] = useState([]);

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

        const fetchCart = async () => {
            if (token) {
                console.log("fetchCart");

                try {
                    const response = await CartService.getCart(token);
                    console.log("CartService response:", response);

                    // Проверяем, является ли response.data строкой или объектом
                    let cartData;
                    if (typeof response.data === "string") {
                        // Если строка, обрезаем и исправляем формат
                        const cleanedData = response.data
                            .replace(/^cartItems=/, "") // Удаляем возможный префикс
                            .replace(/=/g, ":") // Исправляем возможный "=" на ":"
                            .replace(/'/g, '"'); // Заменяем одинарные кавычки на двойные

                        cartData = JSON.parse(cleanedData);
                    } else {
                        cartData = response.data.cartItems
                            ? JSON.parse(response.data.cartItems)
                            : [];
                    }

                    setCart(cartData);
                } catch (error) {
                    console.error("Failed to fetch cart:", error);
                }
            } else {
                console.log("fetchCart no token");
            }
        };

        const token = localStorage.getItem("token");
        if (token) {
            console.log("token:", token);
            fetchCart(token);
        } else {
            console.log("no token:");
        }

        fetchMenu();
    }, [token]);

    // Фильтрация по категориям
    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredMenu(menu);
        } else {
            setFilteredMenu(menu.filter((item) => item.category === category));
        }
    };

    // Добавление товара в корзину и обновление на сервере
    const addToCart = async (item) => {
        try {
            await CartService.updateCart([...cart, item]);
            setCart([...cart, item]);
        } catch (error) {
            console.error("Failed to update cart:", error);
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
                    addToCart={addToCart}
                    closeDetails={() => setSelectedItem(null)}
                />
            )}
        </div>
    );
};

export default Menu;
