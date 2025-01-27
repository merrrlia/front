import React, { useState } from "react";
import ManageItems from "./ManageItems";
import ManageUsers from "./ManageUsers";

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState("items");

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Панель Администратора
            </h1>

            <div className="flex space-x-4 mb-8">
                <button
                    className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-all ${
                        activeTab === "items"
                            ? "bg-[#8B4513] text-white"
                            : "bg-gray-300 text-gray-800"
                    }`}
                    onClick={() => setActiveTab("items")}
                >
                    Управление товарами
                </button>
                <button
                    className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-all ${
                        activeTab === "users"
                            ? "bg-[#8B4513] text-white"
                            : "bg-gray-300 text-gray-800"
                    }`}
                    onClick={() => setActiveTab("users")}
                >
                    Управление пользователями
                </button>
            </div>

            {activeTab === "items" ? <ManageItems /> : <ManageUsers />}
        </div>
    );
};

export default AdminPanel;
