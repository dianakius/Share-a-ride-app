const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGODB_URI;
console.log(URI)
main()
 .then(() => console.log("DB is connected successfully"))
 .catch((err) => console.log(err));
 //connect
 async function main() {
    await mongoose.connect(URI);
}

module.exports = main;