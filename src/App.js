import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";

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
            </Routes>
        </Router>
    );
}

export default App;
