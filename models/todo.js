const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  record: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    default: 15072021,
  },
});

module.exports = mongoose.model("TodoModel", TodoSchema);
