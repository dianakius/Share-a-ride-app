const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SALTTOKEN = process.env.SALT_ROUND;

const register = async (req, res) => {
    console.log(req.body);
    try {
        let username = req.body.name;
        let email = req.body.email;
        let password = req.body.pass;

        if (!email || !username || !password) {
            return res.status(400).send({ msg: "All data are required", status: false });
        }
        
        let oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(400).send({
                msg: "User already exists, please login or register with a new email",
                status: false
            });
        }

        let hashPassword = await bcrypt.hash(password, +SALTTOKEN);
        const newUser = await User.create({ username, email, password: hashPassword });
        
        // Generate token for auto-login after registration
        let token = jwt.sign(
            { email: newUser.email, id: newUser._id },
            process.env.PASSWORD
        );
        
        return res.status(201).send({ 
            msg: "Registered successfully", 
            status: true,
            token 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ 
            msg: "Internal server error, cannot register", 
            status: false 
        });
    }
};

const login = async (req, res) => {
    try {
        let password = req.body.pass;
        let email = req.body.email;
        console.log(email, password);
        
        if (!email || !password) {
            return res.status(400).send({ 
                msg: "Both email and password are required", 
                status: false 
            });
        }
        
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({
                msg: "User not found, please check your email or register",
                status: false
            });
        }
        
        let isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({
                msg: "Invalid or wrong password",
                status: false
            });
        }

        let token = jwt.sign(
            { email: user.email, id: user._id },
            process.env.PASSWORD
        );
        
        res.status(200).send({ 
            msg: "Login successful", 
            status: true,
            token 
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ 
            msg: "Internal server error", 
            status: false 
        });
    }
};

module.exports = { login, register };