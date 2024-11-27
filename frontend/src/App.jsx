import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Order from "./Order.jsx";
import Admin from "./Admin.jsx";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import About from './components/About';
import Menu from "./components/Menu.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/order"} element={<Order />} />
                <Route path={"/admin"} element={<Admin />} />
            </Routes>
        </>
    )
}
const App = () => {
    return (
        <div>
            {/* Другие компоненты */}
            <About />
            <Menu/>
            {/* Другие компоненты */}
        </div>
    );
};

export default App;
