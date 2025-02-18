const { Server } = require('socket.io');

let io;

const initSocket = (server) => {
    io = new Server(server, { cors: { origin: '*', methods: ["GET", "POST"] } });

    io.on("connection", (socket) => {
        console.log("New client connected:", socket.id);

        socket.on("join", (userId) => {
            socket.join(userId);
            console.log(`User ${userId} joined their room`);
        });

        socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
            try {
                io.to(receiverId).emit("newChat", { senderId, message });
            } catch (err) {
                console.error("Error handling message:", err);
            }
        });

        socket.on("disconnect", () => {
            console.log("Client disconnected");
        });
    });

    return io;
};

const getSocket = () => {
    if (!io) {
        throw new Error("Socket.IO has not been initialized!");
    }
    return io;
}

module.exports = { initSocket, getSocket };