const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const exerciseSchema = require("./Exercises.js");
// const workoutSchema = new Schema({
//   day: {
//     type: Date,
//     default: Date.now,
//   },
//   exercises: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Exercise",
//     },
//   ],
// });

// const Workout = mongoose.model("Workout", workoutSchema);

// module.exports = Workout;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: exerciseSchema,
  // {
  //   type: {
  //     type: String,
  //     trim: true,
  //     required: "Enter a exercise type",
  //   },
  //   name: {
  //     type: String,
  //     trin: true,
  //     required: "Enter the name of exercise",
  //   },
  //   duration: {
  //     type: Number,
  //     trim: true,
  //     required: "Enter a duration",
  //   },
  //   weight: {
  //     type: Number,
  //     trim: true,
  //   },
  //   reps: {
  //     type: Number,
  //     trim: true,
  //   },
  //   sets: {
  //     type: Number,
  //     trim: true,
  //   },
  //   distance: {
  //     type: Number,
  //     trim: true,
  //   },
  // },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
