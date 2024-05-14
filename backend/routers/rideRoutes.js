const express = require("express");
const router = express.Router ();
const verifyToken = require("../middleware/auth")

const {
    searchRides,
    createRide,
    deleteRide,
    updateRide 
} = require("../controllers/rideController");



// router.post("/create" , verifyToken, createRide);
router.post("/create" , verifyToken, createRide);
// router.get("/" , searchRides);
// router.put("/:id" , updateRide);
// router.delete("/:id" , deleteRide);

module.exports = router;