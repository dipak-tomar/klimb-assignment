const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const multer = require("multer");

require('dotenv').config();

const app = express();


app.use(express.static(path.join(__dirname, "views")));

const PORT = process.env.PORT || 5000;



mongoose
  .connect(process.env.LOCAL_DATABASE)
  .then(() => {
    console.log('database connected');
  })
  .catch((error) => console.log(error));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});



app.listen(PORT, () => {
    console.log(`server connected on ${PORT}`);
})