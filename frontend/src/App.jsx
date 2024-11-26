import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Order from "./Order.jsx";
import Admin from "./Admin.jsx";

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

export default App;
