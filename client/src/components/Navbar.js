import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./ContextAuth";
import "./navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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
            setIsLoggedIn(true);
        }
    }, [setIsLoggedIn]);

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
                            <Link to='/' className='nav-links' onClick={() => { closeMobileMenu(); scrollToTop(); }}>
                                Home
                            </Link>
                        </li>
                        {!isLoggedIn && (
                            <>
                                <li className="nav-item">
                                    <Link to='/login' className="nav-links" onClick={() => { closeMobileMenu(); scrollToTop(); }}>
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/signup' className="nav-links" onClick={() => { closeMobileMenu(); scrollToTop(); }}>
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
                            <Link to='/contact-us' className="nav-links" onClick={() => { closeMobileMenu(); scrollToTop(); }}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;









































// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCarSide } from "@fortawesome/free-solid-svg-icons";
// import { useAuth } from "./ContextAuth";
// import "./navbar.css";

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);
//     const { isLoggedIn, setIsLoggedIn } = useAuth();

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if (window.innerWidth <= 960) {
//             setButton(false);
//         } else {
//             setButton(true);
//         }
//     };

//     useEffect(() => {
//         showButton();
//     }, []);

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             setIsLoggedIn(true);
//         }
//     }, [setIsLoggedIn]);

//     window.addEventListener('resize', showButton);

//     function handleLogout() {
//         if (localStorage.getItem("token")) {
//             if(window.confirm("Are you sure you want to leave us?")) {
//                 localStorage.removeItem("token");
//                 setIsLoggedIn(false);
//                 alert("Logout");
//             }
//         } else {
//             return;
//         }
//     }

//     return (
//         <>
//             <nav className='navbar'>
//                 <div className='navbar-container'>
//                     <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//                         Share Ride
//                         <FontAwesomeIcon icon={faCarSide} />
//                     </Link>
//                     <div className='menu-icon' onClick={handleClick}>
//                         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//                     </div>
//                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                         <li className='nav-item'>
//                             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                                 Home
//                             </Link>
//                         </li>
//                         {!isLoggedIn && (
//                             <>
//                                 <li className="nav-item">
//                                     <Link to='/login' className="nav-links" onClick={closeMobileMenu}>
//                                         Login
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link to='/signup' className="nav-links" onClick={closeMobileMenu}>
//                                         Sign up
//                                     </Link>
//                                 </li>
//                             </>
//                         )}
//                         {isLoggedIn && (
//                             <>
//                                 <li className="nav-item">
//                                     <Link to='/profile' className="nav-links" onClick={closeMobileMenu}>
//                                         Profile
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link to='/about-us' className="nav-links" onClick={closeMobileMenu}>
//                                         About Us
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link to='/new' className="nav-links" onClick={closeMobileMenu}>
//                                         Announce your Ride
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link to="/" className="nav-links" onClick={(e) => {handleLogout(); closeMobileMenu();}}>
//                                         Logout
//                                     </Link>
//                                 </li>
//                             </>
//                         )}
//                         <li className="nav-item">
//                             <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
//                                 Contact Us
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar;





