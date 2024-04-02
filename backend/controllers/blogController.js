const { response } = require("express");
const Blog = require("../models/blogModel");

const getAllBlogs = async(req,res) =>{
    try {
        const blogs = await Blog.find().populate("author");
        res.send(blogs)
            }catch (error) {
                res.status(500).send({msg: "Internal server error", status: false});
            }
};

const createBlog = async(req,res) =>{
    try {
        console.log(req.user);
        const data=  {
            title: req.body.title, 
            imgUrl: req.body.imgUrl,
            content: req.body.content,
            author:req.user.id,
        
        };

        const newBlog = await Blog.create()
        res.status(200).send({msg:"Blog created successfully", status: true, newBlog});
            }catch (error) {
                res.status(500).send({msg: "Internal server error", status: false});
            }
};

const deleteBlog=async(req,res)=>{
    try {
        const{id}=req.params;
        await Blog.deleteOne({_id:id});
        res.status(200).send({msg:"deleted successfully", status: true, });
            }catch (error) {
            res.status(500).send({msg: "Internal server error", status: false});
    }
};
const updateBlog=async(req,res) =>{
    try {
        const{id}=req.params;
        const data = req.body;
        let updated = await Blog.updateOne({_id:id}, data);
        await Blog.updateOne({_id:id}, data)
        res.status(200).send({msg:"updated successfully", status: true, updated});
    } catch (error) {
        res.status(500).send({msg: "Internal server error", status: false});
    }
};

module.exports={getAllBlogs, createBlog, deleteBlog, updateBlog};