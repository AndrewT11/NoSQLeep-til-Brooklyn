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
    required: "Enter weight used",
  },
  reps: {
    type: Number,
    trim: true,
    required: "Enter the number of reps",
  },
  sets: {
    type: Number,
    trim: true,
    required: "Enter the number of sets",
  },
  distance: {
    type: Number,
    trim: true,
    required: "Enter distance covered",
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
