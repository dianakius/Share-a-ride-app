const connection = require("./connection");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

//middleware
app.use(express.json());
app.use(cors());


app.use("/user", require("./routers/userRoutes"))
app.use("/ride", require("./routers/rideRoutes"));

app.listen(port, () =>
console.log(`Server is start listening on port ${port}`)
);