import React, { useState } from "react";
import { MenuService } from "../../services/MenuService";

const AddItemModal = ({ setModalOpen, setItems }) => {
    const [newItem, setNewItem] = useState({
        name: "",
        description: "",
        imageUrl: "",
        category: "",
        price: "",
    });

    const addItem = async () => {
        if (
            !newItem.name ||
            !newItem.description ||
            !newItem.imageUrl ||
            !newItem.category ||
            !newItem.price
        ) {
            alert("Заполните все поля!");
            return;
        }

        try {
            const createdItem = await MenuService.createMenuItem({
                ...newItem,
                price: parseFloat(newItem.price),
            });
            setItems((prev) => [...prev, createdItem]);
            setModalOpen(false);
        } catch (error) {
            console.error("Error creating item:", error);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
            onClick={() => setModalOpen(false)}
        >
            <div
                className="bg-white rounded-lg p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4">Добавить товар</h2>
                <input
                    type="text"
                    placeholder="Название"
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                    value={newItem.name}
                    onChange={(e) =>
                        setNewItem({ ...newItem, name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Описание"
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                    value={newItem.description}
                    onChange={(e) =>
                        setNewItem({ ...newItem, description: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="URL изображения"
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                    value={newItem.imageUrl}
                    onChange={(e) =>
                        setNewItem({ ...newItem, imageUrl: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Категория"
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                    value={newItem.category}
                    onChange={(e) =>
                        setNewItem({ ...newItem, category: e.target.value })
                    }
                />
                <input
                    type="number"
                    placeholder="Цена"
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                    value={newItem.price}
                    onChange={(e) =>
                        setNewItem({ ...newItem, price: e.target.value })
                    }
                />
                <button
                    onClick={addItem}
                    className="w-full bg-green-500 text-white py-2 rounded-lg"
                >
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default AddItemModal;
