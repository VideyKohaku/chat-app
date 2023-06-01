const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/User.Controller");

router.get("/", UserController.getAllUsers);
router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);
router.get("/find/:userId", UserController.findUser);

module.exports = router