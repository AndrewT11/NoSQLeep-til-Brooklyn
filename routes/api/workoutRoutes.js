const router = require("express").Router();
const db = require("../../models");

//get last workout function()
router.get("/workouts", (req, res) => {
  db.Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//add Exercise
//this is where we pick between cardio and resistance
router.post("/workouts/:id", (req, res) => {
  console.log("added exercise", req.body);
  db.Workout.update(req.body, (error, data) => {
    {
      _id: mongojs.ObjectId(req.params.id);
    }
    //not sure about what to set here.
    // {
    //   $set: {
    //     title: req.body.title,
    //     note: req.body.note,
    //     modified: Date.now()
    //   }
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

//create a workout function ()
router.post("/workouts", (req, res) => {
  db.Exercise.insert(req.body)
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

router.get("/workouts/range", (req, res) => {
  db.Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;

//public/api.js fetches to build routes off of
// const API = {
//   async getLastWorkout() {
//     let res;
//     try {
//       res = await fetch("/api/workouts");
//     } catch (err) {
//       console.log(err);
//     }
//     const json = await res.json();

//     return json[json.length - 1];
//   },
//   async addExercise(data) {
//     const id = location.search.split("=")[1];

//     const res = await fetch("/api/workouts/" + id, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const json = await res.json();

//     return json;
//   },
//   async createWorkout(data = {}) {
//     const res = await fetch("/api/workouts", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" },
//     });

//     const json = await res.json();

//     return json;
//   },

//   async getWorkoutsInRange() {
//     const res = await fetch(`/api/workouts/range`);
//     const json = await res.json();

//     return json;
//   },
// };
