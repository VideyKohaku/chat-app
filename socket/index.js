const { Server } = require("socket.io")
const { removeSocket } = require("./utils/objectUtils")

const io = new Server({
    cors: "http://localhost:5173"
})

let onlineUsers = {}

// listen to connection
io.on("connection", (socket) => {
    // event: add user
    socket.on("addNewUser", (userId) => {
        console.log("not have user:", onlineUsers[userId] && onlineUsers[userId].userId)
        if (!(onlineUsers[userId] && onlineUsers[userId].userId) && userId != null) {
            onlineUsers = {
                ...onlineUsers,
                [userId]: {
                    userId,
                    socketId: socket.id,
                }
            }
        }

        io.emit("getUserOnline", onlineUsers)
    })
   
    
    // event: send message
    socket.on("sendMessage", (message) => {
        const recipientUser = onlineUsers[message.recipientId]
        if (recipientUser) {
            io.to(recipientUser.socketId).emit("getMessage", message)
        }
    })


    // listen to disconnection
    socket.on("disconnect", () => {
        onlineUsers = removeSocket(onlineUsers, socket.id)
        console.log("after trim online users:", onlineUsers)
        io.emit("getUserOnline", onlineUsers)
    })

});

io.listen(3000)
