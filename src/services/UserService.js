import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

// Функция для получения токена из локального хранилища
const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export const UserService = {
    getAllUsers: async () => {
        const response = await axios.get(API_URL, getAuthHeaders());
        return response.data;
    },

    getUserById: async (id) => {
        const response = await axios.get(`${API_URL}/${id}`, getAuthHeaders());
        return response.data;
    },

    createUser: async (user) => {
        const response = await axios.post(API_URL, user, getAuthHeaders());
        return response.data;
    },

    updateUser: async (id, user) => {
        const response = await axios.put(
            `${API_URL}/${id}`,
            user,
            getAuthHeaders()
        );
        return response.data;
    },

    deleteUser: async (id) => {
        await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
    },
};
