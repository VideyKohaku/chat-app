const express = require("express");
const router = express.Router();
const ChatRoomController = require("../Controllers/ChatRoom.Controller");


router.post("/",ChatRoomController.createChat);
router.get("/:userId", ChatRoomController.getUserChats);
router.get("/find/:firstId/:secondId", ChatRoomController.findChat);

module.exports = router;