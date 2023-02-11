const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    Organization_name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
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
    intro: {
      type: String,
      max: 100,
    },
    desc: {
      type: String,
      max: 500,
    },
    minDonation: {
      type: String,
      max: 50,
    },
    Contacts:{
      type:String,

    }
  },

);

module.exports = mongoose.model("Organization", UserSchema);
