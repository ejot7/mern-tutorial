const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc    Get goal
// @route   GET /api/goals
// @access  Private
const getGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  res.status(200).json(goal);
});
// @desc    Create new Goal
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "Goal text is required." });
  }
  const goal = await Goal.create({ text: req.body.text });
  res.status(200).json(goal);
});
// @desc    delete goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await goal.remove();
  res.status(200).json({id: req.params.id});
});
// @desc    update existing goal
// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

module.exports = {
  getGoal,
  getGoals,
  createGoal,
  deleteGoal,
  updateGoal,
};
