const userRouter = require('./routes/userRoutes');
const reportRouter = require('./routes/reportRoute');
const loveRequestRouter = require('./routes/loveRequestRoutes');
const express = require('express');

const router = express.Router();

router.use('/users', userRouter);
router.use('/reports', reportRouter);
router.use('/love-requests', loveRequestRouter);

module.exports = router;
