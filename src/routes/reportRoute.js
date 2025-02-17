const express = require('express');
const reportUser = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.post('/report-user', reportUser);

module.exports = router;