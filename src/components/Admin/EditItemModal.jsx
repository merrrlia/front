import React, { useState } from "react";
import { MenuService } from "../../services/MenuService";

const EditItemModal = ({ selectedItem, setEditModalOpen, setItems }) => {
    const [editedItem, setEditedItem] = useState({ ...selectedItem });

    const updateItem = async () => {
        if (
            !editedItem.name ||
            !editedItem.description ||
            !editedItem.imageUrl ||
            !editedItem.category ||
            !editedItem.price
        ) {
            alert("Заполните все поля!");
            return;
        }

        try {
            const updatedItem = await MenuService.updateMenuItem(
                editedItem.id,
                editedItem
            );
            setItems((prev) =>
                prev.map((item) =>
                    item.id === updatedItem.id ? updatedItem : item
                )
            );
            setEditModalOpen(false);
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
            onClick={() => setEditModalOpen(false)}
        >
            <div
                className="bg-white rounded-lg p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4">Редактировать товар</h2>
                <input
                    type="text"
                    placeholder="Название"
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                    value={editedItem.name}
                    onChange={(e) =>
                        setEditedItem({ ...editedItem, name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Описание"
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                    value={editedItem.description}
                    onChange={(e) =>
                        setEditedItem({
                            ...editedItem,
                            description: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="URL изображения"
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                    value={editedItem.imageUrl}
                    onChange={(e) =>
                        setEditedItem({
                            ...editedItem,
                            imageUrl: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Категория"
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                    value={editedItem.category}
                    onChange={(e) =>
                        setEditedItem({
                            ...editedItem,
                            category: e.target.value,
                        })
                    }
                />
                <input
                    type="number"
                    placeholder="Цена"
                    className="w-full px-4 py-2 border rounded-lg mb-4"
                    value={editedItem.price}
                    onChange={(e) =>
                        setEditedItem({ ...editedItem, price: e.target.value })
                    }
                />
                <button
                    onClick={updateItem}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg"
                >
                    Сохранить изменения
                </button>
            </div>
        </div>
    );
};

export default EditItemModal;
