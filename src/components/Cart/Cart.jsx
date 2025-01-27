import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartService } from "../../services/CartService";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            CartService.getCart(token)
                .then((response) => {
                    console.log("CartService response:", response);

                    try {
                        let cartData;
                        if (typeof response.data === "string") {
                            // Исправляем форматирование строки данных
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
                        console.error("Error parsing cart data:", error);
                        setCart([]);
                    }
                })
                .catch((error) => console.error("Error fetching cart:", error));
        } else {
            console.log("No token found, cart cannot be loaded.");
        }
    }, [token]);

    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        console.log("updatedCart", updatedCart);
        setCart(updatedCart);
        if (token) {
            CartService.updateCart(updatedCart);
        } else {
            console.error("No token available for cart update.");
        }
    };

    return (
        <div className="h-[calc(100vh-85px)] flex flex-col items-center bg-[#FAE3C6] px-4 md:px-10 py-8">
            {cart.length === 0 ? (
                <div className="text-center text-gray-800">
                    <p className="text-2xl md:text-3xl font-semibold mb-6">
                        Ваша корзина пуста 😢
                    </p>
                    <Link
                        to="/"
                        className="px-8 py-3 bg-[#8B4513] text-white text-lg md:text-xl font-semibold rounded-full shadow-md hover:bg-[#A0522D] transition-all duration-300"
                    >
                        Вернуться в меню
                    </Link>
                </div>
            ) : (
                <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden">
                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center gap-6 p-6 border-b border-gray-200 last:border-none"
                        >
                            <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    {item.description}
                                </p>
                                <p className="mt-2 text-lg font-bold text-gray-900">
                                    {item.price} тг
                                </p>
                            </div>
                            <button
                                className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300"
                                onClick={() => removeFromCart(index)}
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
