const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/User.Controller");

router.post("/register", UserController.registerUser);
router.get("/login", UserController.loginUser);

module.exports = router