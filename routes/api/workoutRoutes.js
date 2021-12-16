const router = require("express").Router();
const db = require("../../models");

//aggregate to find total duration. need to figure out.
// .aggregate([
//   {
//     $addFields: {
//       totalDuration: { $sum: "$exercise.duration" },
//     },
//   },
//get last workout function()
router.get("/", (req, res) => {
  db.Workout.find()
    // .aggregate([
    //   {
    //     $addFields: {
    //       totalDuration: { $sum: "$Exercise.duration" },
    //     },
    //   },
    // ])
    .populate("exercises")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//add Exercise
router.put("/:id", async (req, res) => {
  console.log("added exercise", req.body);
  try {
    const exercise = await db.Exercise.create(req.body);
    const workout = await db.Workout.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: { exercises: exercise._id },
      }
    );
    res.json(workout);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//create a workout function ()
router.post("/", (req, res) => {
  db.Workout.create(req.body)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//get workouts in range function ()
router.get("/range", (req, res) => {
  db.Workout.find()
    .populate("exercises")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
