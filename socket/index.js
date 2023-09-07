const { Server } = require("socket.io")
const { removeSocket } = require("./utils/objectUtils")

const io = new Server({
    cors: "http://localhost:5173"
})

let onlineUsers = {}

io.on("connection", (socket) => {
    console.log("new connection with socketID: ", socket.id)

    // listen to connection
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
        console.log("Online user:", onlineUsers)

        io.emit("getUserOnline", onlineUsers)
    })
    

    // listen to disconnection
    socket.on("disconnect", () => {
        console.log("socket to be disconnect: ", socket)
        onlineUsers = removeSocket(onlineUsers, socket.id)
        console.log("after trim online users:", onlineUsers)
        io.emit("getUserOnline", onlineUsers)
    })

});

io.listen(3000)
