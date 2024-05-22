import React, { useState } from "react";
import axios from "axios";
import { jwt_decode} from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let user = { email, pass };
            console.log(user)
            let res = await axios.post("http://localhost:8000/user/login", user);
            // alert(res.data.msg);
            const token = res.data.token;
            localStorage.setItem("token", token);
            navigate("/");
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

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
    )
}



// import React, { useState } from "react";
// import axios from "axios";
// import { jwt_decode} from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import "./navbar.css";

// export const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Login</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label htmlFor="password">Password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <button type="submit">Log In</button>
//             </form>
//             {/* <button className="link-btn" onClick={() =>props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
//         </div>
//     )
// }








// function Login() {
//     const navigate = useNavigate("")
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     let token;
//     let decoded;

//     const login =async (event) => {
//         event.preventDefault();
//         try {
//             let user = {email, password};
//             console.log(user);
//             let res = await axios.post("http://localhost:3000/user/login", user);
//             //console.log(res.data.token);
//             alert(res.data.msg);
//             token = res.data.token;
//             localStorage.setItem("token", token);
//             navigate("/");
           
//         } catch (error) {
//         console.log(error);
//  };
// }
// console.log(email, password);
// return (
// <div className="form-container">
// <div className="parallax"></div>
//     <h1>Login</h1>
//     <form className="registration-form" onSubmit={login}> 
//     <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
//     <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
//     <input type="submit" value="login" />
//     </form>
// </div>
// )
// }


// export default Login;