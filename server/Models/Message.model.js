const mongoose = require("mongoose");

const COLLECTION_NAME = "Message"

const messageSchema = new mongoose.Schema(
    {
        chatRoomId: {
            type: String,
            require: true,
        },
        senderId: String,
        content: String,
    }, {
    timestamps: true,
}
)

const messageModel = mongoose.model(COLLECTION_NAME, messageSchema)

module.exports = messageModel