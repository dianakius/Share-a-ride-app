import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./ContextAuth";
import "./navbar.css";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let user = { email, pass };
            console.log(user);
            let res = await axios.post("http://localhost:8001/user/login", user);
            const token = res.data.token;
            localStorage.setItem("token", token);
            setIsLoggedIn(true);
            navigate("/");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            {/* <button className="link-btn" onClick={() =>props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
    );
};


