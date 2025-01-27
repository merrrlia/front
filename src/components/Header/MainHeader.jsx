import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaShoppingCart,
    FaUser,
    FaInfoCircle,
    FaHome,
    FaTools,
    FaSearch,
} from "react-icons/fa";

const MainHeader = ({ onSearch }) => {
    const [userEmail, setUserEmail] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("userEmail");
        const adminStatus = localStorage.getItem("isAdmin") === "true";

        if (token && email) {
            setUserEmail(email);
            setIsAdmin(adminStatus);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("isAdmin");
        setUserEmail(null);
        setIsAdmin(false);
        navigate("/auth");
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <header className="w-full bg-white border-b border-gray-300 px-6 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between shadow-sm space-y-4 md:space-y-0">
            <Link
                to="/"
                className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide"
            >
                Zhash Café
            </Link>

            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Поиск товаров..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                />
                <FaSearch className="absolute right-4 top-3 text-gray-500" />
            </div>

            <div className="flex items-center space-x-4 md:space-x-6">
                <Link
                    to="/about"
                    className="text-gray-700 text-lg md:text-xl font-medium hover:text-gray-500 transition flex items-center"
                >
                    <FaInfoCircle className="block md:hidden text-2xl" />
                    <span className="hidden md:inline">О нас</span>
                </Link>

                {isAdmin && (
                    <Link
                        to="/admin"
                        className="text-gray-700 text-lg md:text-xl font-medium hover:text-gray-500 transition flex items-center"
                    >
                        <FaTools className="block md:hidden text-2xl" />
                        <span className="hidden md:inline">Админка</span>
                    </Link>
                )}

                {userEmail ? (
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-700 text-lg font-medium hidden md:inline">
                            {userEmail}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="px-6 py-2 bg-red-500 text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-300"
                        >
                            Выйти
                        </button>
                    </div>
                ) : (
                    <Link
                        to="/auth"
                        className="flex items-center px-6 py-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-300"
                    >
                        <FaUser className="block md:hidden text-2xl" />
                        <span className="hidden md:inline">Войти</span>
                    </Link>
                )}

                <Link
                    to="/cart"
                    className="flex items-center px-6 py-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-300"
                >
                    <FaShoppingCart className="block md:hidden text-2xl" />
                    <span className="hidden md:inline">Корзина</span>
                </Link>
            </div>
        </header>
    );
};

export default MainHeader;
