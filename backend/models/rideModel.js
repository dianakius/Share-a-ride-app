const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
    {
        startingPoint: { type: String, required: true },
        endingPoint: { type: String, required: true },
        driver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        date: { type: Date, required: true },
        time: { type: String, required: true },
        cost: { type: Number, required: true },
    },
    { timestamps: true }
);

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;