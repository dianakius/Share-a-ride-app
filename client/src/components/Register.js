import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import "./navbar.css";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        email.preventDefault();
        console.log(email);

    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form"onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" id="name" placeholder="full Name"></input>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label for="password">password</label>
            <input value={email}type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() =>props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}




// function Register() {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const [surname, setSurname] = useState("");
//     const [dob, setDob] = useState("");

//     const register = async (event) => {
//         event.preventDefault();
//         try {
//             let user = { username, email, password, name, surname, dob };
//             let res = await axios.post("http://localhost:3000/user/register", user);
//             alert(res.data.msg);
//         } catch (error) {
         
//         }
//     };

//     return (
//         <div className="form-container">
//             <div className="parallax"></div>
//             <h1>Register</h1>
//             <form className="registration-form" onSubmit={register}>
//                 <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//                 <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//                 <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
//                 <input type="text" placeholder="Surname" onChange={(e) => setSurname(e.target.value)} />
//                 <input type="date" placeholder="Date of Birth" onChange={(e) => setDob(e.target.value)} />
//                 <input type="submit" value="Signup" />
//             </form>
//         </div>
//     );
// }

// export default Register;