const { response } = require("express");
const Ride = require("../models/rideModel");

const searchRides = async (req, res) => {
  try {
    const { startLocation, destination, dateTime } = req.query;

    // Create date range for the entire day
    const searchDate = new Date(dateTime);
    const startOfDay = new Date(searchDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(searchDate.setHours(23, 59, 59, 999));

    const rides = await Ride.find({
      startingPoint: { $regex: new RegExp(startLocation, "i") },
      endingPoint: { $regex: new RegExp(destination, "i") },
      date: { $gte: startOfDay, $lte: endOfDay },
    }).populate("driver");

    res.send(rides);
  } catch (error) {
    console.error("Error searching for rides:", error);
    res.status(500).send({ msg: "Internal server error", status: false });
  }
};

const createRide = async (req, res) => {
  console.log(req.user);
  try {
    const data = {
      startingPoint: req.body.startingPoint,
      endingPoint: req.body.endingPoint,
      driver: req.user.id,
      date: req.body.date,
      time: req.body.time,
      cost: req.body.cost,
    };

    const newRide = await Ride.create(data);
    res
      .status(200)
      .send({ msg: "Ride created successfully", status: true, newRide });
  } catch (error) {
    console.log(error);
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

// const Ride = require("../models/rideModel");

// const searchRides = async (req, res) => {
//     try {
//         const rides = await Ride.find().populate("driver");
//         res.send(rides);
//     } catch (error) {
//         res.status(500).send({ msg: "Internal server error", status: false });
//     }
// };

// const createRide = async (req, res) => {
//     console.log(req.user)
//     try {
//         const data = {
//             startingPoint: req.body.startingPoint,
//             endingPoint: req.body.endingPoint,
//             // driver: req.user.id,
//             date: req.body.date,
//             time: req.body.time,
//             cost: req.body.cost,

//         };

//         const newRide = await Ride.create(data);
//         res.status(200).send({ msg: "Ride created successfully", status: true, newRide });
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({ msg: "Internal server error", status: false });
//     }
// };

// const deleteRide = async (req, res) => {
//     // try {
//     //     const { id } = req.params;
//     //     await Ride.deleteOne({ _id: id });
//     //     res.status(200).send({ msg: "Ride deleted successfully", status: true });
//     // } catch (error) {
//     //     res.status(500).send({ msg: "Internal server error", status: false });
//     // }
// };

// const updateRide = async (req, res) => {
//     // try {
//     //     const { id } = req.params;
//     //     const data = req.body;
//     //     let updated = await Ride.updateOne({ _id: id }, data);
//     //     res.status(200).send({ msg: "Ride updated successfully", status: true, updated });
//     // } catch (error) {
//     //     res.status(500).send({ msg: "Internal server error", status: false });
//     // }
// };

// module.exports = { searchRides, createRide, deleteRide, updateRide };
