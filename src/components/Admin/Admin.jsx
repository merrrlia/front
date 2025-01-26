import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState("items"); // "items", "users", "orders"

    // Пример данных
    const [items, setItems] = useState([
        { id: 1, name: "Капучино", description: "Горячий кофе с молоком", price: 1000, imageUrl: "" },
    ]);
    const [users, setUsers] = useState([
        { id: 1, name: "Александр", email: "alex@mail.com", role: "user" },
    ]);
    const [orders, setOrders] = useState([
        { id: 1, user: "Александр", items: ["Капучино"], total: 1000, status: "pending" },
    ]);

    // CRUD функции
    const addItem = (newItem) => setItems([...items, newItem]);
    const removeItem = (id) => setItems(items.filter((item) => item.id !== id));
    const updateItem = (id, updatedItem) =>
        setItems(items.map((item) => (item.id === id ? updatedItem : item)));

    const removeUser = (id) => setUsers(users.filter((user) => user.id !== id));

    const updateOrderStatus = (id, status) =>
        setOrders(
            orders.map((order) =>
                order.id === id ? { ...order, status } : order
            )
        );

    return (
        <div className="min-h-screen bg-[#FAE3C6] px-4 md:px-10 py-8">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                Администраторская панель
            </h1>
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    className={`px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all duration-300 ${
                        activeTab === "items"
                            ? "bg-[#8B4513] text-white"
                            : "bg-gray-300 text-gray-700"
                    }`}
                    onClick={() => setActiveTab("items")}
                >
                    Товары
                </button>
                <button
                    className={`px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all duration-300 ${
                        activeTab === "users"
                            ? "bg-[#8B4513] text-white"
                            : "bg-gray-300 text-gray-700"
                    }`}
                    onClick={() => setActiveTab("users")}
                >
                    Пользователи
                </button>
                <button
                    className={`px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all duration-300 ${
                        activeTab === "orders"
                            ? "bg-[#8B4513] text-white"
                            : "bg-gray-300 text-gray-700"
                    }`}
                    onClick={() => setActiveTab("orders")}
                >
                    Заказы
                </button>
            </div>

            {/* Таблица товаров */}
            {activeTab === "items" && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Управление товарами
                    </h2>
                    <button
                        className="mb-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        onClick={() =>
                            addItem({
                                id: Date.now(),
                                name: "Новый товар",
                                description: "Описание товара",
                                price: 500,
                                imageUrl: "",
                            })
                        }
                    >
                        Добавить товар
                    </button>
                    <div>
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b border-gray-300 py-4"
                            >
                                <div>
                                    <h3 className="text-lg font-bold">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.description}
                                    </p>
                                    <p className="text-gray-800 font-semibold">
                                        {item.price} тг
                                    </p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                        onClick={() =>
                                            updateItem(item.id, {
                                                ...item,
                                                name: "Обновленный товар",
                                            })
                                        }
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
                        ))}
                    </div>
                </div>
            )}

            {/* Таблица пользователей */}
            {activeTab === "users" && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Управление пользователями
                    </h2>
                    <div>
                        {users.map((user) => (
                            <div
                                key={user.id}
                                className="flex justify-between items-center border-b border-gray-300 py-4"
                            >
                                <div>
                                    <h3 className="text-lg font-bold">
                                        {user.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {user.email}
                                    </p>
                                    <p className="text-gray-800 font-semibold">
                                        Роль: {user.role}
                                    </p>
                                </div>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    onClick={() => removeUser(user.id)}
                                >
                                    Удалить
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Таблица заказов */}
            {activeTab === "orders" && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Обработка заказов
                    </h2>
                    <div>
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="flex justify-between items-center border-b border-gray-300 py-4"
                            >
                                <div>
                                    <h3 className="text-lg font-bold">
                                        Заказ №{order.id}
                                    </h3>
                                    <p className="text-gray-600">
                                        Клиент: {order.user}
                                    </p>
                                    <p className="text-gray-600">
                                        Товары: {order.items.join(", ")}
                                    </p>
                                    <p className="text-gray-800 font-semibold">
                                        Сумма: {order.total} тг
                                    </p>
                                    <p className="text-gray-600">
                                        Статус: {order.status}
                                    </p>
                                </div>
                                <button
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                    onClick={() =>
                                        updateOrderStatus(order.id, "completed")
                                    }
                                >
                                    Завершить
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
