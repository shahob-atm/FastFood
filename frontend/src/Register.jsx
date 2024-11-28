import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './Register.css';

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^[A-Za-z]+$/, "First name can only contain letters")
        .required("First name is required")
        .min(2, "First name must be at least 2 characters"),
    lastName: yup
        .string()
        .matches(/^[A-Za-z]+$/, "First name can only contain letters")
        .required("lastName is required")
        .min(3, "lastName must be at least 4 characters"),
    username: yup
        .string()
        .required('Username kiritilishi shart!'),
    password: yup
        .string()
        .required("Password is required")
        .min(3, "Password must be at least 6 characters"),
});

const Register = () => {
    const { reset, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();

    const handleRegister = (data) => {
        axios({
            url: "/api/auth/register",
            method: "POST",
            data: data
        }).then(() => {
            reset({
                firstName: "",
                lastName: "",
                username: "",
                password: "",
            });
            navigate("/login");
        }).catch(() => {
            alert("Check you data and try again");
        });
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h6 className="text-center mb-4">Register</h6>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <input
                        type={"text"}
                        className="form-control mb-1"
                        placeholder="First Name"
                        {...register("firstName")}
                    />
                    <p className="text-danger mb-3">{errors.firstName?.message}</p>

                    <input
                        className="form-control mb-1"
                        placeholder="Last Name"
                        {...register("lastName")}
                    />
                    <p className="text-danger mb-3">{errors.lastName?.message}</p>

                    <input
                        className="form-control mb-1"
                        placeholder="Username"
                        {...register("username")}
                    />
                    <p className="text-danger mb-3">{errors.username?.message}</p>

                    <input
                        className="form-control mb-1"
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                    />
                    <p className="text-danger mb-3">{errors.password?.message}</p>

                    <div className="text-center mb-3">
                        <Link to="/login">Already have an account? Go to login</Link>
                    </div>

                    <button className="btn btn-primary w-100" type="submit">Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
