const express = require("express");
const router = express.Router();
const MessageController = require("../Controllers/Message.Controller");

router.post("/", MessageController.createMessage);
router.get("/:chatRoomId", MessageController.getAllMessages);

module.exports = router