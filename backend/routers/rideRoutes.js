const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const {
    searchRides,
    createRide,
    deleteRide,
    updateRide,
    getUserRides
} = require("../controllers/rideController");

router.get("/search", searchRides);
router.post("/create", verifyToken, createRide);
router.get("/my-rides", verifyToken, getUserRides);
router.put("/:id", verifyToken, updateRide);
router.delete("/:id", verifyToken, deleteRide);

module.exports = router;