const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trin: true,
    required: "Enter the name of workout",
  },
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercises",
    },
  ],
});

const User = mongoose.model("Workouts", WorkoutsSchema);

module.exports = User;
