import React from "react";

const SelectedItemDetails = ({ item, addToCart, closeDetails }) => {
    return (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={closeDetails}
                >
                    ✕
                </button>
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-lg"
                />
                <h2 className="text-2xl font-semibold mt-4">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => addToCart(item)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default SelectedItemDetails;
