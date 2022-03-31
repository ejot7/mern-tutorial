const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
const User = require("../models/userModel")

// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({user: req.user.id});
  res.status(200).json(goals);
});

// @desc    Create new Goal
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "Goal text is required." });
  }
  const goal = await Goal.create({ text: req.body.text, user: req.user.id });
  res.status(200).json(goal);
});
// @desc    delete goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  const user = await User.findById(req.user.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if(goal.user.toString() !== req.user.id) {
    res.status(401).json({ message: "Not authorized" });
  }
  await goal.remove();
  res.status(200).json({id: req.params.id});
});
// @desc    update existing goal
// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  const user = await User.findById(req.user.id);

  

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if(goal.user.toString() !== req.user.id) {
    res.status(401).json({ message: "Not authorized" });
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

module.exports = {
  getGoals,
  createGoal,
  deleteGoal,
  updateGoal,
};
