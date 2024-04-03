
const User = require("../models/userModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const  register = async (req,res)=> {
    try {
        let { username, email, password } = req.body;
    if (!email || !username || !password) {
        return res.send({ msg: "All data are required"});
    }
    let oldUser = await UserActivation.findOne({ email });
    if (oldUser) {
        return res.send({
            msg: "user already exist please login or register with a new email",
        });
    }

    let hashPassword = await bcrypt.hash(password, +process.env.SALT_ROUND);
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
        let {email, password } = req.body;
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
    process.env.SECRET_KEY
);
res.send({msg: "Login successfully", token});
} catch(error) {
    console.log(error);
    res.send({msg: "internal server error"});
}
};

module.exports = {login, register};