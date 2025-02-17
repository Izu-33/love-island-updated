const User = require('../models/user');
const Report = require('../models/report');

const reportUser = async (req, res) => {
    try {
        const { reportedUserId, reason } = req.body;
       
        const reportedUser = await User.findById(reportedUserId);
        if (!reportedUser) {
            return res.status(404).json({
                success: false,
                message: 'Reported user not found'
            });
        }

        const reporterId = req.userInfo.userId;

        const newReport = new Report({
            reporterId,
            reportedUserId,
            reason
        });

        await newReport.save();

        reportedUser.reports.push(newReport._id);
        await reportedUser.save();

        return res.status(201).json({
            success: true,
            message: 'User reported successfully',
            report: newReport
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
};

module.exports = reportUser;