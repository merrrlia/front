import React, { useEffect, useState } from "react";
import { MenuService } from "../../services/MenuService";
import AddItemModal from "./AddItemModal";
import EditItemModal from "./EditItemModal";

const ManageItems = () => {
    const [items, setItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const menuData = await MenuService.getMenu();
            setItems(menuData);
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };

    const removeItem = async (id) => {
        try {
            await MenuService.deleteMenuItem(id);
            setItems(items.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const openEditModal = (item) => {
        setSelectedItem(item);
        setEditModalOpen(true);
    };

    return (
        <div className="w-full max-w-4xl">
            <button
                onClick={() => setModalOpen(true)}
                className="mb-6 px-6 py-3 bg-[#8B4513] text-white text-lg font-semibold rounded-lg shadow-md hover:scale-105 transition-all"
            >
                Добавить товар
            </button>

            <div className="bg-white rounded-xl shadow-lg p-6">
                {items.length === 0 ? (
                    <p className="text-gray-500 text-center">
                        Пока нет товаров.
                    </p>
                ) : (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-b border-gray-200 py-4"
                        >
                            <div>
                                <h3 className="text-lg font-bold">
                                    {item.name}
                                </h3>
                                <p>{item.description}</p>
                                <p className="font-semibold">{item.price} тг</p>
                                <p>Категория: {item.category}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                    onClick={() => openEditModal(item)}
                                >
                                    Изменить
                                </button>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Удалить
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {modalOpen && (
                <AddItemModal setModalOpen={setModalOpen} setItems={setItems} />
            )}
            {editModalOpen && (
                <EditItemModal
                    selectedItem={selectedItem}
                    setEditModalOpen={setEditModalOpen}
                    setItems={setItems}
                />
            )}
        </div>
    );
};

export default ManageItems;
