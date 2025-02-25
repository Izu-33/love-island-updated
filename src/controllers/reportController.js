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

const getAllReportedUsers = async (req, res) => {
    try {
        const reports = await Report.find().populate('reportedUserId');
        const reportedUsers = reports.map(report => report.reportedUserId);

        return res.status(200).json({
            success: true,
            message: 'Reported users fetched successfully',
            reportedUsers
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
};

const getAllReports = async (req, res) => {
    try {
        const reports = await Report.find()
            .populate('reporterId')
            .populate('reportedUserId');

        return res.status(200).json({
            success: true,
            message: 'Reports fetched successfully',
            reports
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
    reportUser,
    getAllReportedUsers,
    getAllReports
};