import express from "express";
import mongoose from "mongoose";
const app = express();
mongoose.connect()
app.use("/api", (req, res, next) => {
  res.send("Hello world");
});

app.get("/", (req, res) => {
  res.send("Hello user");
});
app.listen(4000, () => {
  "Server is successfully started";
});
