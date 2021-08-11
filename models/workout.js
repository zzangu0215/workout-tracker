const mongoose = require("mongoose");

const { Schema } = mongoose;
const opts = { toJSON: { virtuals: true } };

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now(),
    },
    exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: "Enter a name for exercise",
        },
        type: {
          type: String,
          trim: true,
          required: "Enter a type",
        },
        distance: {
          type: Number,
        },
        duration: {
          type: Number,
          required: "Enter a duration",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  opts
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
