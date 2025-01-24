import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Проверка совпадения паролей
        if (password !== confirmPassword) {
            setError("Пароли не совпадают.");
            return;
        }

        // Простая логика регистрации (здесь можно добавить запрос к API)
        if (email && password) {
            setSuccess(
                "Регистрация прошла успешно! Перенаправление на страницу входа..."
            );
            setTimeout(() => {
                navigate("/auth");
            }, 2000);
        } else {
            setError("Пожалуйста, заполните все поля.");
        }
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-85px)] bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Регистрация
                </h2>
                {error && (
                    <div className="mb-4 text-red-500 text-sm">{error}</div>
                )}
                {success && (
                    <div className="mb-4 text-green-500 text-sm">{success}</div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 mb-2"
                        >
                            Электронная почта
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Введите вашу почту"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 mb-2"
                        >
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Введите ваш пароль"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 mb-2"
                        >
                            Подтвердите пароль
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Подтвердите ваш пароль"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
                    >
                        Зарегистрироваться
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Уже есть аккаунт?{" "}
                        <Link
                            to="/auth"
                            className="text-blue-500 hover:underline"
                        >
                            Войти
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
