const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        // firstName: {type:String},
        // lastName: {type:String},
        username: String,
        email: { type:String, required:true, lowercase: true },
        password: String, 
        // userType: {type:String},
    },
    { timestamps: true }
);

//Model
const User = mongoose.model("User", userSchema);

module.exports = User;