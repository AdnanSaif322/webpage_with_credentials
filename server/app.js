//Libraries
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;
require("./db/connect");

const app = express();

// convert json through middleware
app.use(express.json());
// link router
app.use(require("./router/auth"));


//Get Routes

// app.get("/aboutMe", (req, res) => {
//   res.send("About page");
// });

// app.get("/register", middleware, (req,res)=>{
//     res.send("Register page");
// })

app.get("/login", (req, res) => {
  res.send("login page");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
