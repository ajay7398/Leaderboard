// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {type:String,unique:true},
  totalPoints: { type: Number, default: 0 }
});

const User= mongoose.model("User", userSchema);
export default User;
