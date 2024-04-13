import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import { jwt_decode} from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./navbar.css";




function Login() {
    const navigate = useNavigate("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let token;
    let decoded;

    const login =async (event) => {
        event.preventDefault();
        try {
            let user = {email, password};
            console.log(user);
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
console.log(email, password);
return (
<div className="form-container">
<div className="parallax"></div>
    <h1>Login</h1>
    <form className="registration-form" onSubmit={login}> 
    <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
    <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
    <input type="submit" value="login" />
    </form>
</div>
)
}


export default Login;