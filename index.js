import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
const app = express();
app.use(express.json);
app.use("/api/user", router);
mongoose
  .connect("mongodb://localhost:27017")
  .then(app.listen(4000))
  .then(console.log("Connected to the database and listening on 4000"));
