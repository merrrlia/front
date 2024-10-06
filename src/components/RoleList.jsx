// src/components/RoleList.js
import React, { useEffect, useState } from "react";
import { RoleService } from "../services/RoleService"; // Не забудьте создать RoleService, аналогично UserService

const RoleList = () => {
    const [roles, setRoles] = useState([]);
    const [newRoleName, setNewRoleName] = useState("");

    useEffect(() => {
        fetchRoles();
    }, []);

    const fetchRoles = async () => {
        const response = await RoleService.getRoles();
        setRoles(response.data);
    };

    const handleCreateRole = async () => {
        await RoleService.createRole({ name: newRoleName });
        setNewRoleName("");
        fetchRoles();
    };

    const handleDeleteRole = async (id) => {
        await RoleService.deleteRole(id);
        fetchRoles();
    };

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Role List</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={newRoleName}
                    onChange={(e) => setNewRoleName(e.target.value)}
                    placeholder="New Role Name"
                    className="border border-gray-300 rounded p-2 mr-2 flex-grow"
                />
                <button
                    onClick={handleCreateRole}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Role
                </button>
            </div>
            <ul className="space-y-2">
                {roles.map((role) => (
                    <li
                        key={role.id}
                        className="flex items-center justify-between p-2 border border-gray-200 rounded"
                    >
                        <span>{role.name}</span>
                        <button
                            onClick={() => handleDeleteRole(role.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;
