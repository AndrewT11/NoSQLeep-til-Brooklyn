const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a exercise type",
  },
  name: {
    type: String,
    trin: true,
    required: "Enter the name of exercise",
  },
  duration: {
    type: Number,
    trim: true,
    required: "Enter a duration",
  },
  weight: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  distance: {
    type: Number,
    trim: true,
  },
});

// const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = exerciseSchema;
