const express = require('express');
const {
    signUp,
    signIn,
    updateUser,
    getUsersByInterest,
    getUsersByHobby
} = require('../controllers/userController');

const router = express.Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);

router.patch('/update-user-profile/:id', updateUser);

router.get("/users-by-interest", getUsersByInterest);
router.get('/users-by-hobby', getUsersByHobby);


module.exports = router;