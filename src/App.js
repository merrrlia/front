import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import Login from "./components/Auth/Auth";
import Register from "./components/Auth/Register";
import About from "./components/About/About";
import MainHeader from "./components/Header/MainHeader";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AdminPanel from "./components/Admin/Admin";


function App() {
    const [cart, setCart] = useState([]);

    return (
        <Router>
            <MainHeader cart={cart} />
            <Routes>
                <Route
                    path="/"
                    element={<Menu cart={cart} setCart={setCart} />}
                />
                <Route
                    path="/cart"
                    element={<Cart cart={cart} setCart={setCart} />}
                />
                <Route path="/auth" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
            <ScrollToTopButton />
        </Router>
    );
}

export default App;
