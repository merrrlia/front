// src/services/UserService.js

import axios from "axios";

const API_URL = "http://localhost:8080/api/users"; // Ваш URL API

export const UserService = {
    getUsers: () => axios.get(API_URL),
    createUser: (user) => axios.post(API_URL, user),
    deleteUser: (id) => axios.delete(`${API_URL}/${id}`),

    // Обновление пользователя
    updateUser: (id, userDetails) => axios.put(`${API_URL}/${id}`, userDetails),
};
