const express = require("express");
const router = express.Router();

router.use("/api/users", require("./user.route"))

router.get("/", (req, res) => {
    res.send("Welcome to chat app API");
})

module.exports = router