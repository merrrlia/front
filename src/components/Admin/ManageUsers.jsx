import React, { useEffect, useState } from "react";
import { UserService } from "../../services/UserService";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const usersData = await UserService.getAllUsers();
            setUsers(usersData);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    };

    const toggleAdmin = async (userId, isAdmin) => {
        try {
            // Создаем копию массива пользователей
            const updatedUsers = users.map((user) =>
                user.id === userId ? { ...user, admin: isAdmin } : user
            );

            const updatedUser = updatedUsers.find((user) => user.id === userId);

            await UserService.updateUser(userId, updatedUser);

            // Обновляем состояние с измененным пользователем
            setUsers(updatedUsers);
        } catch (error) {
            console.error("Error updating user admin status:", error);
        }
    };

    return (
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
                Управление пользователями
            </h2>
            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="flex justify-between items-center py-2 border-b"
                    >
                        <span>{user.email}</span>
                        <button
                            className={`px-4 py-2 rounded ${
                                user.isAdmin ? "bg-red-500" : "bg-green-500"
                            } text-white`}
                            onClick={() => toggleAdmin(user.id, !user.isAdmin)}
                        >
                            {user.isAdmin ? "Снять админа" : "Сделать админом"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageUsers;
