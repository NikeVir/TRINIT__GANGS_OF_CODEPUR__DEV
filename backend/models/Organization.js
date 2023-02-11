const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    Organization_name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    field: {
      type: Array,
    },
    intro: {
      type: String,
      max: 100,
    },
    desc: {
      type: String,
      max: 500,
    },
    minDonation: {
      type: Number,
      max: 50,
    },
    Contacts:{
      type:String,
      max:10,
      min:10
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Organization", UserSchema);
