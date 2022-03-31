const express = require("express");
const router = express.Router();
const {getGoal, getGoals, deleteGoal, createGoal, updateGoal} = require("../controllers/goalcontroller");
const {protect} = require("../middleware/authMiddleware")


router.route("/").get(protect, getGoals).post(protect, createGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

/*
router.get("/:id", getGoal);
router.get("/", getGoals);
router.post("/", createGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);
*/

module.exports = router;
