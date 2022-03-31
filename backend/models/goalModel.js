const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  text: {
    type: 'String',
    required: [true, "Goal text is required."],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required."]
  }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Goal", goalSchema);