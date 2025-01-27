import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const AuthService = {
    register: async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/register`, {
                email,
                password,
            });
            console.log("response.data: ", response.data);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data.message : error.message;
        }
    },
    login: async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password,
            });
            console.log("login response.data: ", response.data);

            return response.data; // Ожидаем объект с token и userInfo (например, роль)
        } catch (error) {
            throw error.response ? error.response.data.message : error.message;
        }
    },
};
