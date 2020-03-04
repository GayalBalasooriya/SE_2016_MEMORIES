const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5000;

const register = require("./routes/auth/register");

app.use(express.json());



// app.get("/test", (req, res) => {
//     return res.json("Hello world");
// });

app.use(register);

app.listen(PORT, ()=> {
    console.log("Server started");
});