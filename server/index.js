const express = require("express");
const { readdirSync } = require("fs");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const authRoutes = require("./routes/authRoutes.js");
const { connectDB } = require("./connection.js");


const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.json("Backend")
})

app.use("/api", authRoutes);

readdirSync("./routes").map((route) => {
    app.use("/api", require(`./routes/${route}`))
})

// console.log(readdirSync("./routes"));

connectDB();

app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`);
})

// username : rishikeshmahale16_db_user
// password :  Wi9YJ8TFf7YYfbUS