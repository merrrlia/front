import React from "react";

const ItemCard = ({ item, onClick }) => {
    return (
        <div
            className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => onClick(item)}
        >
            <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                    {item.name}
                </h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
        </div>
    );
};

export default ItemCard;
