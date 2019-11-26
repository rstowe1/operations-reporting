const mongoose = require("mongoose");

const StatusSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("status", StatusSchema);
