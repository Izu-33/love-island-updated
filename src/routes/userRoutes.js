const express = require('express');
const {
    signUp,
    signIn,
    updateUser,
    getUsersByInterest,
    getUsersByHobby,
    getUserById,
    deleteUserById
} = require('../controllers/userController');

const router = express.Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);

router.patch('/update-user-profile/:id', updateUser);

router.get("/users-by-interest", getUsersByInterest);
router.get('/users-by-hobby', getUsersByHobby);
router.get('/user/:id', getUserById);

router.delete('/delete-user/:id', deleteUserById);

module.exports = router;