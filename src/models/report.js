const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    reporterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reportedUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reason: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;