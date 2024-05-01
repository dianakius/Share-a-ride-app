const mongoose = require("mongoose");
const rideSchema = new mongoose.Schema(
    {
        title: String, 
        destination:String,
        imgUrl: String, 
        driver:{type:mongoose.Schema.Types.ObjectID , ref:"User"}
    },
    { timestamps: true }
);

//Model
const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;