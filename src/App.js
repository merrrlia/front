import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import Login from "./components/Auth/Auth";
import Register from "./components/Auth/Register";
import About from "./components/About/About";


function App() {
    const [cart, setCart] = useState([]); // State to manage cart items

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Menu cart={cart} setCart={setCart} />}
                />
                <Route
                    path="/cart"
                    element={<Cart cart={cart} setCart={setCart} />}
                />
                <Route
                    path="/auth"
                    element={<Login/>}
                />
                <Route
                    path="/register"
                    element={<Register/>}
                />
                <Route
                    path="/about"
                    element={<About/>}
                />
            </Routes>
        </Router>
    );
}

export default App;
