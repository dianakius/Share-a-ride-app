const mongoose = require("mongoose");
const rideSchema = new mongoose.Schema(
  {
    startingPoint: String,
    endingPoint: String,
    driver: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
    date: Date,
    time: String,
    cost: Number,
  },
  { timestamps: true }
);

//Model
const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;
