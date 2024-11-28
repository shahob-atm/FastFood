import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Login.css";

const schema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(3, "Password must be at least 6 characters"),
});

const Login = () => {
    const { reset, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (data) => {
        setIsLoading(true);
        axios({
            url: "/api/auth/login",
            method: "POST",
            data: data,
        })
            .then((res) => {
                reset({
                    username: "",
                    password: "",
                });
                localStorage.setItem("token", JSON.stringify(res.data));
                navigate("/home");
            })
            .catch((err) => {
                const errorMessage = err.response?.data?.message || "Wrong username or password, please check and try again";
                alert(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: "800px"}}>
            <div className="login-form">
                <h5 className="text-center mb-4">Login</h5>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-group mb-1">
                        <input
                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                            placeholder="Username..."
                            {...register("username")}
                        />
                        {errors.username && <p className="text-danger">{errors.username.message}</p>}
                    </div>
                    <div className="form-group mb-1">
                        <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Password..."
                            {...register("password")}
                        />
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                    </div>
                    <Link to="/register" className="d-block text-center mb-1">Go to create account</Link>
                    <Link to="/home" className="d-block text-center mb-1">Go to home page</Link>
                    <button className="btn btn-primary w-100" type="submit" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
