const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const headers = req.headers.authorization;
    
    if (!headers) {
        return res.status(403).send({ msg: "Token not found, Unauthorized", status: false });
    }
    
    try {
        let clientToken = headers.split(" ")[1];
        let verifiedToken = jwt.verify(clientToken, process.env.PASSWORD);
        req.user = verifiedToken;
        next();
    } catch (error) {
        return res.status(401).send({ msg: "Invalid token, unauthorized", status: false });
    }
};

module.exports = verifyToken;