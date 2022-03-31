const express = require("express")
const router = express.Router()

const {registerUser, getMe, authenticateUser }= require("../controllers/userController")

router.route("/").post(registerUser)
router.route("/login").post(authenticateUser)
router.route("/me").get(getMe)

module.exports = router