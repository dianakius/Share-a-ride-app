const Ride = require("../models/rideModel");

const searchRides = async (req, res) => {
    try {
        const { startLocation, destination, dateTime } = req.query;
        
        let query = {};
        
        if (startLocation) {
            query.startingPoint = { $regex: new RegExp(startLocation, "i") };
        }
        
        if (destination) {
            query.endingPoint = { $regex: new RegExp(destination, "i") };
        }
        
        if (dateTime) {
            const searchDate = new Date(dateTime);
            const startOfDay = new Date(searchDate.setHours(0, 0, 0, 0));
            const endOfDay = new Date(searchDate.setHours(23, 59, 59, 999));
            query.date = { $gte: startOfDay, $lte: endOfDay };
        }
        
        const rides = await Ride.find(query).populate("driver", "username email");
        res.status(200).send({ status: true, rides });
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
        res.status(201).send({ 
            msg: "Ride created successfully", 
            status: true, 
            ride: newRide 
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal server error", status: false });
    }
};

const deleteRide = async (req, res) => {
    try {
        const { id } = req.params;
        const ride = await Ride.findById(id);
        
        if (!ride) {
            return res.status(404).send({ msg: "Ride not found", status: false });
        }
        
        // Check if user is the driver
        if (ride.driver.toString() !== req.user.id) {
            return res.status(403).send({ 
                msg: "Unauthorized: You can only delete your own rides", 
                status: false 
            });
        }
        
        await Ride.deleteOne({ _id: id });
        res.status(200).send({ msg: "Ride deleted successfully", status: true });
    } catch (error) {
        res.status(500).send({ msg: "Internal server error", status: false });
    }
};

const updateRide = async (req, res) => {
    try {
        const { id } = req.params;
        const ride = await Ride.findById(id);
        
        if (!ride) {
            return res.status(404).send({ msg: "Ride not found", status: false });
        }
        
        // Check if user is the driver
        if (ride.driver.toString() !== req.user.id) {
            return res.status(403).send({ 
                msg: "Unauthorized: You can only update your own rides", 
                status: false 
            });
        }
        
        const data = req.body;
        let updated = await Ride.updateOne({ _id: id }, data);
        res.status(200).send({ 
            msg: "Ride updated successfully", 
            status: true, 
            updated 
        });
    } catch (error) {
        res.status(500).send({ msg: "Internal server error", status: false });
    }
};

const getUserRides = async (req, res) => {
    try {
        const rides = await Ride.find({ driver: req.user.id })
            .populate("driver", "username email")
            .sort({ date: 1, time: 1 });
        res.status(200).send({ status: true, rides });
    } catch (error) {
        console.error("Error fetching user rides:", error);
        res.status(500).send({ msg: "Internal server error", status: false });
    }
};

module.exports = { 
    searchRides, 
    createRide, 
    deleteRide, 
    updateRide, 
    getUserRides 
};