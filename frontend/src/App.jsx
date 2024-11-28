import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Order from "./Order.jsx";
import Admin from "./Admin.jsx";
import Home from "./Home.jsx";
import "./App.css";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import {useEffect} from "react";
import axios from "axios";


function App() {

    const {pathname} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        handleCheckPermission();
    }, [pathname]);

    const permissions = [{path: "/admin", roles: ["ROLE_ADMIN"]}, {path: "/order", roles: ["ROLE_USER", "ROLE_ADMIN"]}]

    const handleCheckPermission = () => {

        if (!pathname.startsWith("/login") && !pathname.startsWith("/register") && !pathname.startsWith("/home")) {
            if (hasAnyRoles() !== undefined) {
                axios({
                    url: "/api/auth/me",
                    method: "GET",
                    headers: {token: JSON.parse(localStorage.getItem("token"))},
                }).then((res) => {
                    console.log(res.data);
                    for (let i = 0; i < res.data.length; i++) {
                        if (hasAnyRoles().includes(res.data[i].name)){
                            return;
                        }
                    }
                    navigate("/home");
                }).catch(() => {
                    navigate("/home");
                    localStorage.removeItem("token");
                })
            }else {
                navigate("/home");
            }
        }
    }

    const hasAnyRoles = () => {
        for (let i = 0; i < permissions.length; i++) {
            if (pathname.startsWith(permissions[i].path)) {
                return permissions[i].roles;
            }
        }
    }

    return (
        <>
            <Routes>
                <Route path={"/order"} element={<Order />} />
                <Route path={"/admin"} element={<Admin />} />
                <Route path={"/home"} element={<Home />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
            </Routes>
        </>
    )
}

export default App;
