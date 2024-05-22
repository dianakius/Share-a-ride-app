import React, { useState } from "react";
import axios from "axios";
import "./navbar.css";

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let user = { email, pass, name };
            let res = await axios.post("http://localhost:8000/user/register", user);
            // alert(res.data.msg);
            // Optionally, you can redirect the user after successful registration
            // Example: props.history.push("/login");
        } catch (error) {
            console.error("Registration failed:", error);
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Sign up</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Sign Up</button>
            </form>
            {/* <button className="link-btn" onClick={() =>props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        </div>
    )
}







// import React, { useState } from "react";

// import axios from "axios";
// import "./navbar.css";

// export const Signup = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(e);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Sign up</h2>
//             <form className="register-form" onSubmit={handleSubmit}>
//                 <label htmlFor="name">Full Name</label>
//                 <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" />
//                 <label htmlFor="email">Email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label htmlFor="password">Password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <button type="submit">Sign Up</button>
//             </form>
//             {/* <button className="link-btn" onClick={() =>props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
//         </div>
//     )
// }





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