const LoveRequest = require('../models/loveRequest');
const User = require('../models/user');

const sendLoveRequest = async (req, res) => {
    try {
        const senderId = req.userInfo.userId;
        const { receiverId } = req.body;

        const receiver = await User.findById(receiverId);
        if (!receiver) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        const existingRequest = await LoveRequest.findOne({
                senderId,
                receiverId,
                status: 'pending'
        });

        if (existingRequest) {
            return res.status(400).json({
                success: false,
                message: 'Love request already sent.'
            });
        }

        const loveRequest = new LoveRequest({ senderId, receiverId });
        await loveRequest.save();
        return res.status(201).json({
            success: true,
            message: 'Love request sent successfully',
            loveRequest
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
};

const updateLoveRequestStatus = async (req, res) => {
    try {
        const requestId = req.params.requestId;
        const status = req.body.status;

        if (!['accepted', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status update'
            });
        }

        const loveRequest = await LoveRequest.findById(requestId);
        if (!loveRequest) {
            return res.status(404).json({
                success: false,
                message: 'Love request not found'
            });
        }

        if (loveRequest.receiverId.toString() !== req.userInfo.userId) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized action'
            });
        }

        loveRequest.status = status;
        await loveRequest.save();

        return res.status(200).json({
            success: true,
            message: 'Love request updated successfully',
            loveRequest
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
};

const getReceivedLoveRequests = async (req, res) => {
    try {
        const receiverId = req.userInfo.userId;
        const receivedRequests = await LoveRequest.find({
            receiverId,
            status: 'pending'
        }).populate('senderId');

        return res.status(200).json({
            success: true,
            message: 'Received love requests fetched successfully',
            receivedRequests
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
};

const getSentLoveRequests = async (req, res) => {
    try {
        const senderId = req.userInfo.userId;
        const sentRequests = await LoveRequest.find({
            senderId 
        }).populate('receiverId');

        return res.status(200).json({
            success: false,
            message: 'Sent love requests fetched successfully',
            sentRequests
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
    sendLoveRequest,
    updateLoveRequestStatus,
    getReceivedLoveRequests,
    getSentLoveRequests
};