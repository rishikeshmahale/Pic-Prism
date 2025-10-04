const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();


const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.json("Backend")
})

app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`);
})