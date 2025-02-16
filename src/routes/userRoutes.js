const express = require('express');
const {
    signUp,
    signIn,
    updateUser
} = require('../controllers/userController');

const router = express.Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);

router.patch('/update-user-profile/:id', updateUser);

module.exports = router;