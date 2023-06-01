const mongoose = require("mongoose");

const COLLECTION_NAME = "chatRoom";

const ChatRoomSchema = new mongoose.Schema(
    {
        members: Array
    },
    {
        timestamps: true
    }
)

const chatRoomModel = mongoose.model(COLLECTION_NAME, ChatRoomSchema);

module.exports = chatRoomModel;