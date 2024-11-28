import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes} from "react-router-dom";
import Order from "./Order.jsx";
import Admin from "./Admin.jsx";
import Home from "./Home.jsx";
import "./App.css";


function App() {

    return (
        <>
            <Routes>
                <Route path={"/order"} element={<Order />} />
                <Route path={"/admin"} element={<Admin />} />
                <Route path={"/"} element={<Home />} />
            </Routes>
        </>
    )
}

export default App;
