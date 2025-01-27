import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import Login from "./components/Auth/Auth";
import Register from "./components/Auth/Register";
import About from "./components/About/About";
import MainHeader from "./components/Header/MainHeader";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AdminPanel from "./components/Admin/AdminPanel";

// Компонент защиты маршрутов
const PrivateRoute = ({ element, isAdmin }) => {
    return isAdmin ? element : <Navigate to="/auth" replace />;
};

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const isAdmin = localStorage.getItem("isAdmin") === "true"; // Получаем статус админа из localStorage

    return (
        <Router>
            <MainHeader onSearch={setSearchQuery} />
            <Routes>
                <Route path="/" element={<Menu searchQuery={searchQuery} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/auth" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute
                            isAdmin={isAdmin}
                            element={<AdminPanel />}
                        />
                    }
                />
            </Routes>
            <ScrollToTopButton />
        </Router>
    );
}

export default App;
