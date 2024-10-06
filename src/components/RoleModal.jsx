// src/components/RoleModal.js
import React, { useEffect, useState } from "react";
import { RoleService } from "../services/RoleService";

const RoleModal = ({ isOpen, onClose, userId, onAssignRole }) => {
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState("");

    useEffect(() => {
        if (isOpen) {
            fetchRoles();
        }
    }, [isOpen]);

    const fetchRoles = async () => {
        const response = await RoleService.getRoles();
        setRoles(response.data);
    };

    const handleAssignRole = async () => {
        await RoleService.assignRoleToUser(userId, selectedRole);
        onAssignRole(); // Trigger the callback to refresh the user list
        onClose(); // Close the modal
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="bg-white rounded-lg p-6 z-10 shadow-lg">
                <h2 className="text-lg font-bold mb-4">Assign Role</h2>
                <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="border border-gray-300 rounded p-2 mb-4 w-full"
                >
                    <option value="" disabled>
                        Select a Role
                    </option>
                    {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                            {role.name}
                        </option>
                    ))}
                </select>
                <div className="flex justify-end">
                    <button
                        onClick={handleAssignRole}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Assign
                    </button>
                    <button
                        onClick={onClose}
                        className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoleModal;
