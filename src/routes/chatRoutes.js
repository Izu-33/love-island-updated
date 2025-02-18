const express = require('express');
const { sendMessage, getMessages } = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/send', sendMessage);
router.get('/chat-history/:userId', getMessages);

module.exports = router;