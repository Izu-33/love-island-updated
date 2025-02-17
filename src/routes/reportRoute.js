const express = require('express');
const {
    reportUser,
    getAllReportedUsers,
    getAllReports
} = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/report-user', reportUser);
router.get('/reported-users', getAllReportedUsers);
router.get('/all-reports', getAllReports)

module.exports = router;