
const User = require("../models/userModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SALTTOKEN = process.env.SALT_ROUND;

const  register = async (req,res)=> {
    console.log(req.body)
    try {
        let username = req.body.name;
        let email =req.body.email;
        let password = req.body.pass;

        // let { username, email, password } = req.body;
        
    if (!email || !username || !password) {
        return res.send({ msg: "All data are required"});
    }
    let oldUser = await User.findOne({ email });
    if (oldUser) {
        return res.send({
            msg: "user already exist please login or register with a new email",
        });
    }

    let hashPassword = await bcrypt.hash(password, +SALTTOKEN);
    //console.log(hashPassword);
    await User.create({ username, email, password: hashPassword });
    return res.send({msg: "Registered successfully"});
} catch (error) {
    console.log(error);
    return res.send({ msg: "Internal server error, can not registered......"});
}
};

const login = async (req, res) => {
    try {
        let password = req.body.pass;
        let email = req.body.email;
        console.log(email,password)
        // let {email, password } = req.body;
        if (!email || !password) {
            return res.send ({ msg: "Both email and password are required"});
        }
        let user = await User.findOne({ email});
if (!user) {
    return res.send({
        msg: "user Not Found, please check your email or register again",
    });
}
let isPasswordValid = await bcrypt.compare(password, user.password);
if (!isPasswordValid) {
    return res.send({
        msg: "Invalid or wrong password",
    });
};

  
let token = jwt.sign(
    { email: user.email, id:user._id},
    process.env.PASSWORD
);
res.send({msg: "Login successfully", token});
} catch(error) {
    console.log(error);
    res.send({msg: "internal server error"});
}
};

module.exports = {login, register};
