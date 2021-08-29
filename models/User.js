const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: String,
    },
    avatarSrc: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    gender: {
      type:Boolean,
    },
    active: {
      type:Boolean,
      default:false
    }
  },

);
module.exports = mongoose.model("User", userSchema);
