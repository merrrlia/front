import axios from "axios";

const API_URL = "http://localhost:8080/api/roles";

export const RoleService = {
    getAllRoles: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error("Error fetching roles:", error);
            throw error;
        }
    },

    createRole: async (roleName) => {
        try {
            const response = await axios.post(API_URL, { name: roleName });
            return response.data;
        } catch (error) {
            console.error("Error creating role:", error);
            throw error;
        }
    },

    updateRole: async (id, roleName) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, {
                name: roleName,
            });
            return response.data;
        } catch (error) {
            console.error("Error updating role:", error);
            throw error;
        }
    },

    deleteRole: async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
        } catch (error) {
            console.error("Error deleting role:", error);
            throw error;
        }
    },

    assignRoleToUser: async (roleId, userId) => {
        try {
            const response = await axios.post(
                `${API_URL}/${roleId}/users/${userId}`
            );
            return response.data;
        } catch (error) {
            console.error("Error assigning role to user:", error);
            throw error;
        }
    },
};
