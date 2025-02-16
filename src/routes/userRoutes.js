const express = require('express');
const {
    signUp,
    signIn,
    updateUser,
    getUsersByInterest
} = require('../controllers/userController');

const router = express.Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);

router.patch('/update-user-profile/:id', updateUser);

router.get("/users-by-interest", getUsersByInterest);

module.exports = router;