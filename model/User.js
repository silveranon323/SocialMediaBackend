import mongoose from "mongoose";
const Schema = mongoose.Schema; // Change 'mongoose.schema' to 'mongoose.Schema'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true, // Change 'require' to 'required'
    minlength: 6,
  },
});

export default mongoose.model("User", userSchema); // Change 'mongoose.model' to 'mongoose.model'
