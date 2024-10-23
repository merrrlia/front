import React from "react";

const ItemCard = ({ item, onClick }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            style={{ width: "200px" }} // Fixed card width
            onClick={() => onClick(item)}
        >
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    {item.name}
                </h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
        </div>
    );
};

export default ItemCard;
