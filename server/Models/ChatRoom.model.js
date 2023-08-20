const mongoose = require("mongoose");

const COLLECTION_NAME = "chatRoom";

const ChatRoomSchema = new mongoose.Schema(
    {
        members: Array,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        }
    },
    {
        timestamps: true
    }
)

const chatRoomModel = mongoose.model(COLLECTION_NAME, ChatRoomSchema);

module.exports = chatRoomModel;