const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
  },
  position: {
    type: String,
    required: true,
  },
  joined_date: {
    type: Date,
    required:true,
    default:Date.now()
  },
});

module.exports = mongoose.model("Emp", EmpSchema);
