import React, { useEffect, useState } from "react";
import { UserService } from "../services/UserService";
import RoleModal from "./RoleModal";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [newUserName, setNewUserName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [editUserName, setEditUserName] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await UserService.getUsers();
        setUsers(response.data);
    };

    const handleCreateUser = async () => {
        await UserService.createUser({ name: newUserName });
        setNewUserName("");
        fetchUsers();
    };

    const handleDeleteUser = async (id) => {
        await UserService.deleteUser(id);
        fetchUsers();
    };

    const openModal = (userId, userName) => {
        setSelectedUserId(userId);
        setEditUserName(userName); // Сохраняем текущее имя пользователя для редактирования
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUserId(null);
        setEditUserName(""); // Сброс имени при закрытии модального окна
    };

    const handleUpdateUser = async () => {
        await UserService.updateUser(selectedUserId, { name: editUserName });
        fetchUsers();
        closeModal(); // Закрываем модальное окно после обновления
    };

    const handleAssignRole = () => {
        fetchUsers(); // Обновляем список пользователей после присвоения роли
    };

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="New User Name"
                    className="border border-gray-300 rounded p-2 mr-2 flex-grow"
                />
                <button
                    onClick={handleCreateUser}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add User
                </button>
            </div>
            <ul className="space-y-2">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="p-2 border border-gray-200 rounded flex justify-between items-center"
                    >
                        <div>
                            <span className="font-semibold">{user.name}</span>
                            <ul className="mt-2 pl-4">
                                {user.roles.map((role) => (
                                    <li key={role.id} className="text-gray-700">
                                        {role.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button
                                onClick={() => handleDeleteUser(user.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => openModal(user.id, user.name)} // Передаем имя пользователя
                                className="ml-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            >
                                Edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {/* <RoleModal
                isOpen={isModalOpen}
                onClose={closeModal}
                userId={selectedUserId}
                onAssignRole={handleAssignRole}
            /> */}
            {isModalOpen && (
                <div className="modal">
                    <h3>Edit User</h3>
                    <input
                        type="text"
                        value={editUserName}
                        onChange={(e) => setEditUserName(e.target.value)}
                        placeholder="Edit User Name"
                        className="border border-gray-300 rounded p-2"
                    />
                    <button
                        onClick={handleUpdateUser}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Update User
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserList;
