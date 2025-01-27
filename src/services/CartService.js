import axios from "axios";

const API_URL = "http://localhost:8080/api/cart";

export const CartService = {
    getCart: async () => {
        const token = localStorage.getItem("token");
        return axios.get(`${API_URL}/get`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },

    updateCart: async (cart) => {
        const token = localStorage.getItem("token");
        return axios.post(
            `${API_URL}/update`,
            { cartItems: JSON.stringify(cart) },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
    },
};
