const express = require('express');
const {
    sendLoveRequest,
    updateLoveRequestStatus,
    getReceivedLoveRequests,
    getSentLoveRequests
} = require('../controllers/loveRequestController');
const authMiddleware = require('../middleware/authMiddleware');


const router = express.Router();

router.use(authMiddleware);

router.post('/send', sendLoveRequest);
router.put('/update/:requestId', updateLoveRequestStatus);
router.get('/received', getReceivedLoveRequests);
router.get('/sent', getSentLoveRequests);

module.exports = router;