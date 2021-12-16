const router = require("express").Router();
const db = require("../../models");

//last workout information
router.get("/", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
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
    // const exercise = await db.Exercise.create(req.body); Need to figure this out.
    const workout = await db.Workout.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: { exercises: req.body }, //was exercises: exercise._id.
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

//get workouts in range function
router.get("/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ])
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
