// src/services/MenuService.js

import axios from "axios";

const API_URL = "http://localhost:8080/api/menu";

export const MenuService = {
    getMenu: async () => {
        try {
            const response = await axios.get(API_URL);
            console.log(response.data);

            return response.data;
        } catch (error) {
            console.error("Error fetching menu data:", error);
            throw error;
        }
    },
};
