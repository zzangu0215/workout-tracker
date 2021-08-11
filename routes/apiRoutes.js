const router = require("express").Router();

const Workout = require("../models/workout");

router.get("/api/workouts", async (req, res) => {
  try {
    const workoutsData = await Workout.find();
    res.json(workoutsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    const workoutId = req.params.id;

    const workoutData = await Workout.findByIdAndUpdate(workoutId, {
      $push: {
        exercises: req.body,
      },
    });

    res.json(workoutData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/api/workouts", async (req, res) => {
  try {
    const workoutData = await Workout.create(req.body);
    res.json(workoutData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    // const rawData = await new Workout(req.body);

    // rawData.calculateTotalDuration();

    // const rangeData = await Workout.create(rawData);

    const rangeData = await Workout.find();

    res.json(rangeData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
