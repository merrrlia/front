import React from "react";

const SelectedItemDetails = ({ item, addToCart, closeDetails }) => {
    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            closeDetails();
        }
    };

    const handleAddToCart = () => {
        addToCart(item);
        closeDetails(); // Закрыть окно после добавления товара
    };

    return (
        <div
            id="overlay"
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4 md:p-8"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl md:flex relative overflow-hidden">
                {/* Кнопка закрытия */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl focus:outline-none"
                    onClick={closeDetails}
                >
                    ✕
                </button>

                {/* Левая часть с изображением */}
                <div className="w-full md:w-1/2 h-60 md:h-auto bg-gray-100 flex justify-center items-center">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-2xl"
                    />
                </div>

                {/* Правая часть с деталями */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {item.name}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {item.description}
                    </p>
                    <p className="text-gray-900 text-xl font-semibold mb-6">
                        Цена: {item.price} тг
                    </p>

                    <button
                        className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white py-4 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all duration-300"
                        onClick={handleAddToCart}
                    >
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectedItemDetails;
