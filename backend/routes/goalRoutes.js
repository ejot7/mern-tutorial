const express = require("express");
const router = express.Router();
const {getGoal, getGoals, deleteGoal, createGoal, updateGoal} = require("../controllers/goalcontroller");

router.route("/").get(getGoals).post(createGoal);
router.route("/:id").get(getGoal).delete(deleteGoal).put(updateGoal);

/*
router.get("/:id", getGoal);
router.get("/", getGoals);
router.post("/", createGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);*/

module.exports = router;
