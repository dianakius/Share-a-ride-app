const express = require("express");
const router = express.Router ();
const verifyToken = require("../middleware/auth")

const {
    getAllBlogs, 
    createBlog,
    deleteBlog,
    updateBlog, 
} = require("../controllers/blogController");



router.post("/create" , verifyToken, createBlog);
router.get("/" , getAllBlogs);
router.put("/:id" , updateBlog);
router.delete("/:id" , deleteBlog);

module.exports = router;