const { response } = require("express");
const Ride = require("../models/rideModel");

const searchRides = async (req, res) => {
    try {
        const rides = await Ride.find().populate("driver");
        res.send(rides);
    } catch (error) {
        res.status(500).send({ msg: "Internal server error", status: false });
    }
};

const createRide = async (req, res) => {
    console.log(req.user)
    try {
        const data = {
            startingPoint: req.body.startingPoint,
            endingPoint: req.body.endingPoint,
            // driver: req.user.id,
            date: req.body.date,
            time: req.body.time,
            cost: req.body.cost,

        };

        const newRide = await Ride.create(data);
        res.status(200).send({ msg: "Ride created successfully", status: true, newRide });
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: "Internal server error", status: false });
    }
};

const deleteRide = async (req, res) => {
    // try {
    //     const { id } = req.params;
    //     await Ride.deleteOne({ _id: id });
    //     res.status(200).send({ msg: "Ride deleted successfully", status: true });
    // } catch (error) {
    //     res.status(500).send({ msg: "Internal server error", status: false });
    // }
};

const updateRide = async (req, res) => {
    // try {
    //     const { id } = req.params;
    //     const data = req.body;
    //     let updated = await Ride.updateOne({ _id: id }, data);
    //     res.status(200).send({ msg: "Ride updated successfully", status: true, updated });
    // } catch (error) {
    //     res.status(500).send({ msg: "Internal server error", status: false });
    // }
};

module.exports = { searchRides, createRide, deleteRide, updateRide };



























// const { response } = require("express");
// const Ride = require("../models/rideModel");

// const searchRides = async(req,res) =>{
//     try {
//         const rides = await Blog.find().populate("author");
//         res.send(blogs)
//             }catch (error) {
//                 res.status(500).send({msg: "Internal server error", status: false});
//             }
// };

// const createBlog = async(req,res) =>{
//     try {
//         console.log(req.user);
//         const data=  {
//             title: req.body.title, 
//             imgUrl: req.body.imgUrl,
//             content: req.body.content,
//             author:req.user.id,
        
//         };

//         const newBlog = await Blog.create()
//         res.status(200).send({msg:"Blog created successfully", status: true, newBlog});
//             }catch (error) {
//                 res.status(500).send({msg: "Internal server error", status: false});
//             }
// };

// const deleteBlog=async(req,res)=>{
//     try {
//         const{id}=req.params;
//         await Blog.deleteOne({_id:id});
//         res.status(200).send({msg:"deleted successfully", status: true, });
//             }catch (error) {
//             res.status(500).send({msg: "Internal server error", status: false});
//     }
// };
// const updateBlog=async(req,res) =>{
//     try {
//         const{id}=req.params;
//         const data = req.body;
//         let updated = await Blog.updateOne({_id:id}, data);
//         await Blog.updateOne({_id:id}, data)
//         res.status(200).send({msg:"updated successfully", status: true, updated});
//     } catch (error) {
//         res.status(500).send({msg: "Internal server error", status: false});
//     }
// };

// module.exports={getAllBlogs, createBlog, deleteBlog, updateBlog};