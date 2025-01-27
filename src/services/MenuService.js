// src/services/MenuService.js

import axios from "axios";

const API_URL = "http://localhost:8080/api/menu";

export const MenuService = {
    getMenu: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error("Error fetching menu data:", error);
            throw error;
        }
    },

    createMenuItem: async (newItem) => {
        try {
            const response = await axios.post(API_URL, newItem);
            return response.data;
        } catch (error) {
            console.error("Error creating menu item:", error);
            throw error;
        }
    },

    updateMenuItem: async (id, updatedItem) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, updatedItem);
            return response.data;
        } catch (error) {
            console.error("Error updating menu item:", error);
            throw error;
        }
    },

    deleteMenuItem: async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
        } catch (error) {
            console.error("Error deleting menu item:", error);
            throw error;
        }
    },
};
