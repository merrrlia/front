import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                            <button
                                className="ml-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                onClick={() => removeFromCart(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-4">
                <Link
                    to="/"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Back to Menu
                </Link>
            </div>
        </div>
    );
};

export default Cart;
