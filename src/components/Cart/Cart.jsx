import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
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
                    <div className="p-6 md:p-8 border-b border-gray-200">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            Корзина
                        </h1>
                    </div>

                    <div className="p-6 md:p-8 max-h-[50vh] overflow-y-auto">
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

                    <div className="p-6 md:p-8 flex flex-col items-center">
                        <div className="w-full flex justify-between text-2xl font-bold text-gray-900 mb-6">
                            <span>Итого:</span>
                            <span className="text-[#8B4513]">
                                {cart.reduce(
                                    (total, item) => total + item.price,
                                    0
                                )}{" "}
                                тг
                            </span>
                        </div>

                        <button className="w-full px-8 py-4 bg-[#8B4513] text-white text-lg font-semibold rounded-full shadow-md hover:bg-[#A0522D] transition-all duration-300">
                            Оформить заказ
                        </button>
                        <Link
                            to="/"
                            className="mt-4 text-lg text-gray-700 hover:text-gray-900 transition"
                        >
                            Продолжить покупки
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
