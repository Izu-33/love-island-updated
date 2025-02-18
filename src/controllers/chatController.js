const Chat = require('../models/chat');

const sendMessage = async (req, res) => {
    try {
        const { receiverId, message } = req.body;
        const senderId = req.userInfo.userId;

        if (!receiverId || !message) {
            return res.status(400).json({
                success: false,
                message: 'Receiver and message required'
            });
        }

        const newChat = new Chat({
            senderId,
            receiverId,
            messaage
        });

        await newChat.save();

        return res.status(201).json({
            success: true,
            message: 'Message sent',
            data: newchat
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
};

const getMessages = async (req, res) => {
    try {
        const userId = req.params.userId;
        const myId = req.userInfo.userId;

        const chatHistory = await Chat.find({
            $or: [
                { senderId: myId, receiverId: userId },
                { senderId: userId, receiverId: myId },
            ],
        }).sort({ timestamp: 1 });

        return res.status(200).json({
            success: true,
            message: 'Chat history retrieved successfully',
            chatHistory
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
};

module.exports = {
    sendMessage,
    getMessages
}