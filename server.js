const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-route");

const PORT = 5000;
const URL = "mongodb://0.0.0.0:27017/users";

const app = express();
app.use(express.json());
app.use(userRoutes);

mongoose
  .connect(URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port: ${PORT}`);
});
