const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutSchema = new Schema({
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
      totalDuration: Number,
    },
  ],
});

workoutSchema.methods.totalDuration = function () {
  let total = 0;

  for (let i = 0; i < this.exercises.length; i++) {
    total = total + this.exercises[i].duration;
  }

  this.totalDuration = total;

  return this.totalDuration;
};

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
