const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a workout type",
  },
  name: {
    type: String,
    trin: true,
    required: "Enter the name of workout",
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

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
