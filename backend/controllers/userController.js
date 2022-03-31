// @desc    register new user
// @route   POST /api/users
// @access  public
const registerUser = (req, res) => {
    res.json({message: "register user"})
}

// @desc    authenticate user
// @route   POST /api/users/login
// @access  public
const authenticateUser = (req, res) => {
    res.json({message: "login user"})
}

// @desc    get user data
// @route   GET /api/users/me
// @access  public
const getMe = (req, res) => {
    res.json({message: "userdata display"})
}

module.exports = {
    registerUser,
    authenticateUser,
    getMe
}