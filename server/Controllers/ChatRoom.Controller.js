const chatRoomModel = require("../Models/ChatRoom.model");
const {pickFields} = require("../Utils/pickFields");

class ChatRoomController{
    

    // create chat
    static async createChat(req, res){
        try{
            const {firstId, secondId} = req.body;
            console.log("firstId: ", firstId);
            console.log("secondId: ", secondId);
            const chatRoom = await chatRoomModel.findOne({
                members: {$all: [firstId, secondId]}
            })

            if (chatRoom){
                return res.status(200).json(chatRoom);
            }

            const newChatRoom = await chatRoomModel.create({
                members: [firstId, secondId]
            })

            return res.status(201).json(newChatRoom);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }

    
    // get user chats
    static async getUserChat(req, res){
        try{
            const {userId} = req.params;
            const chats = await chatRoomModel.find({
                members: {$in: {userId}}
            })
            return res.status(200).json(chats)

        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }


    // find chat
    static async findChat(req, res){
        try{
            const {firstId, secondId} = req.params;
            const chat = await chatRoomModel.findOne({
                members: {$all: [firstId, secondId]}
            })

            return res.status(200).json(chat);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
}

module.exports = ChatRoomController;