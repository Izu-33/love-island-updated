const userRouter = require('./routes/userRoutes');
const reportRouter = require('./routes/reportRoute');
const loveRequestRouter = require('./routes/loveRequestRoutes');
const giftRouter = require('./routes/giftRoutes');
const express = require('express');

const router = express.Router();

router.use('/users', userRouter);
router.use('/reports', reportRouter);
router.use('/love-requests', loveRequestRouter);
router.use('/gifts', giftRouter);

module.exports = router;
