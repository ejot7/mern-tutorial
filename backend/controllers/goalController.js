
// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ message: "Get Goals." });
};

// @desc    Get goal
// @route   GET /api/goals
// @access  Private
const getGoal = (req, res) => {
    res.status(200).json({ message: `Get Goal ${req.params.id}` });
};
// @desc    Create new Goal
// @route   POST /api/goals
// @access  Private
const createGoal = (req, res) => {
    if(!req.body.text) {
        res.status(400).json({ message: "Goal text is required." });
    }
    //console.log(req.body)
    res.status(200).json({ message: "Created Goals" });
};
// @desc    delete goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};
// @desc    update existing goal
// @route   PUT /api/goals
// @access  Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

module.exports = {
    getGoal,
    getGoals,
    createGoal,
    deleteGoal,
    updateGoal
}
