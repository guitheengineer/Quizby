const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
const route = require("./routes/shitRoute");

const port = process.env.PORT || 5000;

const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD);

const connectShit = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: false,
      useFindAndModify: false,
    });
  } catch (err) {
    console.log(err);
  }
};
connectShit();

mongoose.connection.on("connected", () => {
  console.log("mongoose");
});

app.use("/api", route);

app.listen(port, () => "server started");
