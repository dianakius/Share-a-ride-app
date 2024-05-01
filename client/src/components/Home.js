import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import Footer from "./Footer"
import HeroSection from "./HeroSection";
import Search from "./Search";


function Home() {
    return (
      <>
        <HeroSection />
      <Search/>
        <Footer />
      </>
    );
  }
  
  export default Home;


// function Home() {
//     const [blogs, setBlogs] = useState([]);
//     const [filteredBlogs, setFilteredBlogs] = useState([]);

//     const getAllBlogs = async () => {
//         let res = await axios.get("http://localhost:3000/blogs");
//         console.log(res.data);
//         setBlogs(res.data);
//         setFilteredBlogs(res.data); 
//     };

//     useEffect(() => {
//         getAllBlogs();
//     }, []);


//     const handleSearch = (searchTerm) => {
//         const filtered = blogs.filter((blog) =>
//             blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredBlogs(filtered);
//     };

//     return (
//         <div>
//             <div className="home-container">
//                 <div className="parallax"></div>
//                 <SearchForm onSearch={handleSearch} />
//                 <div className="columns-container">
//                     <div className="column">
//                         <h3>About Us</h3>
//                         <p>
//                             Welcome to our ride-sharing app! We aim to provide convenient, affordable, and eco-friendly transportation options to our users.
//                         </p>
//                     </div>
//                     <div className="column">
//                         <h3>How It Works</h3>
//                         <p>
//                             Sign up and create your profile.<br />
//                             Search for available rides or offer a ride.<br />
//                             Book your ride and enjoy the journey!
//                         </p>
//                     </div>
//                     <div className="column">
//                         <h3>Contact Us</h3>
//                         <p>
//                             Have questions or feedback? Feel free to reach out to our customer support team at support@rideshareapp.com.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <footer className="footer">
//                 <div className="footer-content">
//                     <div className="footer-section">
//                         <h4>Contact Us</h4>
//                         <p>Email: support@sharerideapp.com</p>
//                         <p>Phone: 1234567890 </p>
//                     </div>
//                     <div className="footer-section">
//                         <h4>Follow Us</h4>
//                         <p>Stay updated on social media:</p>
//                         <div className="social-icons">
//                             <a href="https://www.facebook.com/rideshareapp"><i className="fa fa-facebook"></i></a>
//                             <a href="https://twitter.com/rideshareapp"><i className="fa fa-twitter"></i></a>
//                             <a href="https://www.instagram.com/rideshareapp"><i className="fa fa-instagram"></i></a>
//                         </div>
//                     </div>
//                     <div className="footer-section">
//                         <h4>Legal</h4>
//                         <ul>
//                             <li><a href="/terms-of-service">Terms of Service</a></li>
//                             <li><a href="/privacy-policy">Privacy Policy</a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="footer-bottom">
//                     <p>&copy; 2024 ShareRideApp. All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default Home;

//     return (
//         <div>
//             <div className="home-container">
//                 <div className="parallax"></div>
//                 <SearchForm /> {/* Place the SearchForm component here */}
//                 {blogs.map((blog) => (
//                     <div key={blog.id}>
//                         <h2>{blog.title}</h2>
//                         <img src={blog.imgUrl} alt={blog.title} />
//                         <h3>{blog.author.email}</h3>
//                         <p>{blog.content}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Home;

