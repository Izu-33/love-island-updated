const userRouter = require('./routes/userRoutes');
const reportRouter = require('./routes/reportRoute');
const express = require('express');

const router = express.Router();

router.use('/users', userRouter);
router.use('/reports', reportRouter);

module.exports = router;
