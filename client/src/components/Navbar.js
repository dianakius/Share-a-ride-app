import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { jwtDecode } from "jwt-decode";
import { Button } from "./Button";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            console.log(decoded);
            setIsLoggedIn(true);
        }
    }, []);

    window.addEventListener('resize', showButton);

    function handleLogout() {
        if (localStorage.getItem("token")) {
            if(window.confirm("Are you sure you want to leave us?")) {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                alert("Logout");
            }
        } else {
            return;
        }
    }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Share Ride
                        <FontAwesomeIcon icon={faCarSide} />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        {!isLoggedIn && (
                            <>
                                <li className="nav-item">
                                    <Link to='/login' className="nav-links" onClick={closeMobileMenu}>
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/signup' className="nav-links" onClick={closeMobileMenu}>
                                        Sign up
                                    </Link>
                                </li>
                            </>
                        )}
                        {isLoggedIn && (
                            <>
                                <li className="nav-item">
                                    <Link to='/profile' className="nav-links" onClick={closeMobileMenu}>
                                        Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about-us' className="nav-links" onClick={closeMobileMenu}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/new' className="nav-links" onClick={closeMobileMenu}>
                                        Announce your Ride
                                    </Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={(e) => {handleLogout(); closeMobileMenu();}}>
    Logout
</Link>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;








// import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";
// import {jwtDecode } from "jwt-decode";
// import { Button } from "./Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCarSide } from "@fortawesome/free-solid-svg-icons";




// function  Navbar () {
//     const [click, setClick] =useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

// const showButton = () => {
//     if(window.innerWidth <= 960) {
//         setButton(false);
//     }else  {
//         setButton(true);
//    }
// };

// useEffect(() => {
//     showButton();
//   }, []);


// window.addEventListener('resize', showButton);

//      return (
//         <>
// <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             Share Ride
//             <FontAwesomeIcon icon={faCarSide} />
//                    </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//         </li>
//         <li className="nav-item">
//             <Link to='/login' className="nav-links" onClick={closeMobileMenu}>
//                 Login
//             </Link>
//         </li>
//         <li className="nav-item">
//             <Link to='/signup' className="nav-links" onClick={closeMobileMenu}>
//                 Sign up
//             </Link>
//         </li>
//         <li className="nav-item">
//             <Link to='/contact us' className="nav-links" onClick={closeMobileMenu}>
//                 Contact Us
//             </Link>
//         </li>
//     </ul>
//     {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
// </div>
// </nav>

//      </>
//     )
// }

// export default Navbar




// function Navbar() {
//     let token;
//     let decoded;
//     /*if (localStorage.getItem("token")){
//         token = localStorage.getItem("token");
//         decoded =jwtDecode(token);
//         console.log(decoded);
    
//     }*/
//     token = localStorage.getItem("token");
//     console.log(token)
//     if (token) {
//         decoded =jwtDecode(token);
//         console.log(decoded);
//     }
// function handleLogout() {
//     if (localStorage.getItem("token")) {
//         if(window.confirm("Are you sure you want to leave us?")) {
//         localStorage.removeItem("token");
//         alert("Logout");
//     }
// } else {
//     return;
// }
// }

//     return (
//         <div className="nav-container"> 
//         <div className="logo">
//         <a href="/">
//             <img src="LogoNew.png" alt="Logo" style={{ width: '300px', height: 'auto' }} />
//         </a>
//         </div>          
//       {token ? (
//         <div>
           
//     <div className="links"> 
//     <Link to="/profile">{decoded.email}</Link>
//     <Link to="/about-us">About Us</Link>
//     <Link to="/new" >Announce your Ride</Link>    
//     <Link onClick={handleLogout} to="/">Logout</Link>
//         </div>
//         </div>
//     ) : (
//             <div>
            
//     <div className="links">  
//         <Link to="/ride">Announce</Link>
//         <Link to ="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
//         </div>
//         </div>
//         )}
//      </div>
  
//     );
// }

// export default Navbar;