import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";



function Login() {
    const navigate = useState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let token;
    let decoded;

    const login =async (event) => {
        event.preventDefault();
        try {
            let user = {email, password};
            let res = await axios.post("http://localhost:3000/user/login", user);
            //console.log(res.data.token);
            alert(res.data.msg);
            token = res.data.token;
            localStorage.setItem("token", token);
            navigate("/");
           
        } catch (error) {
        console.log(error);
 };
}
return (
<div className="form-container">
    <h1>Login</h1>
    <form className="registration-form" onSubmit={login}></form>
</div>
)
}

export default Login;