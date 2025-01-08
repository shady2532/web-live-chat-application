const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");
const messageRoute = require("./routes/messageRoute");

const app = express();
require("dotenv").config();

app.use(morgan("dev"));

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.get("/", (request, response) => {
  response.send("Welcome to Chatter! :) ");
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (request, response) => {
  console.log(`Server running on port: ${port}`);
});

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connection established"))
  .catch((error) => console.log("MongoDB connection failed: ", error.message));
