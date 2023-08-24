const mongoose = require("mongoose");

const COLLECTION_NAME = "User";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlenght: 3,
            maxlenght: 30
        },
        email: {
            type: String,
            required: true,
            minlenght: 3,
            maxlenght: 200,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlenght: 8,
            maxlenght: 16
        }
    },
    {
        timestamps: true
    }
)

const userModel = mongoose.model(COLLECTION_NAME, UserSchema);

module.exports = userModel;