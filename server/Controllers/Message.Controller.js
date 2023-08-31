const messageModel = require('../Models/Message.model')
const {pickFields} = require('../Utils/pickFields')

class MessageController{
    static async #formatMessage(){}
    
    static async #getMessages(fields){
        const messages = await messageModel.find(fields).lean();
        return messages
    }

    ///////////////////////////////////////////////////////////////////
    static async createMessage(req, res){
        try{
            const {chatRoomId, senderId, content} = req.body
            console.log(chatRoomId," , ", senderId," , ", content)
            const newMessage = await messageModel.create({
                chatRoomId, senderId, content,
            })
            res.status(200).json(newMessage)
        }
        catch(error){
            res.status.json(error)
        }
    }

    static async getAllMessages(req, res){
        try{
            const {chatRoomId} = req.params;
            const messages = await MessageController.#getMessages({chatRoomId});
            res.status(200).json(messages)
        } catch(error){
            res.status(500).json(error)
        }
    }
}

module.exports = MessageController