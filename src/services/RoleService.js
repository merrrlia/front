import axios from "axios";

const API_URL = "http://localhost:8080/api/roles"; // Обновите URL для вашего Spring Boot API

export const RoleService = {
    getRoles: () => axios.get(API_URL),
    createRole: (role) => axios.post(API_URL, role),
    deleteRole: (id) => axios.delete(`${API_URL}/${id}`),

    // Присваивание роли пользователю
    assignRoleToUser: (roleId, userId) =>
        axios.post(`${API_URL}/${roleId}/users/${userId}`),
};
