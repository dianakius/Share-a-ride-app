import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import "./navbar.css";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [dob, setDob] = useState("");

    const register = async (event) => {
        event.preventDefault();
        try {
            let user = { username, email, password, name, surname, dob };
            let res = await axios.post("http://localhost:3000/user/register", user);
            alert(res.data.msg);
        } catch (error) {
         
        }
    };

    return (
        <div className="form-container">
            <div className="parallax"></div>
            <h1>Register</h1>
            <form className="registration-form" onSubmit={register}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Surname" onChange={(e) => setSurname(e.target.value)} />
                <input type="date" placeholder="Date of Birth" onChange={(e) => setDob(e.target.value)} />
                <input type="submit" value="Signup" />
            </form>
        </div>
    );
}

export default Register;