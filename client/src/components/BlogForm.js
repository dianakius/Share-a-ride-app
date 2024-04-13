// import React, { useState } from "react"
// import axios from "axios";
// import {useNavigate} from "react-router-dom";


// function BlogForm() {
//     const navigate = useNavigate()
// const [title, setTitle]= useState("")
// const [imgUrl, setImgUrl]= useState("")
// const [content, setContent]= useState("")
// let token = localStorage.getItem("token");

//  const createBlog = async (event) => {
//     try {
//         let blogInfo ={title, imgUrl, content};
//         event.preventDefault();
//         let res = await axios.post("http://localhost:8000/blogs/create", blogInfo,
//          {headers:{Authorization:`Bearer ${token}`}});
//         console.log(res.data.msg);
//         alert(res.data);
//         navigate("/");
//     } catch (error) {}
// };
//     return (
//         <div>
//             <form onSubmit={createBlog}>
//             <input placeholder="title" type="text" onChange={(e) => setTitle(e.target.value)} />
//             <input placeholder="content" type="text" onChange={(e) => setContent(e.target.value)}/>
//             <input placeholder="imgUrl" type="text" onChange={(e) => setImgUrl(e.target.value)}/>
//             <input type="submit" value="Create Blog" onChange={(e) => setTitle(e.target.value)}/>
//             </form>
//         </div>
//     );
// }

// export default BlogForm