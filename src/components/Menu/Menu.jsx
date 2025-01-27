import React, { useState, useEffect } from "react";
import { MenuService } from "../../services/MenuService";
import { CartService } from "../../services/CartService";
import CategoryHeader from "../Header/CategoryHeader";
import ItemCard from "./ItemCard";
import SelectedItemDetails from "./SelectedItemDetails";

const Menu = ({ searchQuery, token }) => {
    const [menu, setMenu] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedItem, setSelectedItem] = useState(null);
    const [cart, setCart] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const menuData = await MenuService.getMenu();
                setMenu(menuData);
                setFilteredMenu(menuData);

                // Extracting unique categories
                const uniqueCategories = [
                    "All",
                    ...new Set(menuData.map((item) => item.category)),
                ];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Failed to fetch menu:", error);
            }
        };

        const fetchCart = async () => {
            if (token) {
                console.log("Fetching cart...");

                try {
                    const response = await CartService.getCart(token);
                    console.log("CartService response:", response);

                    let cartData;
                    if (typeof response.data === "string") {
                        const cleanedData = response.data
                            .replace(/^cartItems=/, "")
                            .replace(/=/g, ":")
                            .replace(/'/g, '"');
                        cartData = JSON.parse(cleanedData);
                    } else {
                        cartData = response.data.cartItems
                            ? JSON.parse(response.data.cartItems)
                            : [];
                    }

                    setCart(cartData);
                    localStorage.setItem("cart", JSON.stringify(cartData)); // Сохраняем корзину в localStorage
                } catch (error) {
                    console.error("Failed to fetch cart:", error);
                }
            } else {
                console.log("No token found for cart fetch");
                const storedCart = localStorage.getItem("cart");
                if (storedCart) {
                    setCart(JSON.parse(storedCart));
                }
            }
        };

        fetchMenu();
        fetchCart();
    }, [token]);

    useEffect(() => {
        let filteredResults = menu;

        if (searchQuery) {
            filteredResults = filteredResults.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory !== "All") {
            filteredResults = filteredResults.filter(
                (item) => item.category === selectedCategory
            );
        }

        setFilteredMenu(filteredResults);
    }, [searchQuery, selectedCategory, menu]);

    const filterByCategory = (category) => {
        setSelectedCategory(category);
    };

    const addToCart = async (item) => {
        try {
            console.log("cart", cart, item);
            const updatedCart = [...cart, item]; // Добавляем новый товар, не удаляя старые
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Сохраняем корзину в localStorage
            console.log("updatedCart", updatedCart);

            await CartService.updateCart(updatedCart);
        } catch (error) {
            console.error("Failed to update cart:", error);
        }
    };

    return (
        <div>
            <CategoryHeader
                categories={categories}
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
