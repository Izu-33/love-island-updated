const User = require('../models/user');

const signUp = async (req, res) => {
    try {
        const { username, email } = req.body;
        const existingUser = await User.findOne({$or: [{username}, {email}]});
    
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exist.'
            });
        } else {
            const newUser = new User(req.body);
            await newUser.save();
            return res.status(201).json({
                message: 'User successfully created'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        });
    }
    
};

const signIn = async (req, res) => {
    try {

    } catch (err) {
        
    }
};

module.exports = {
    signUp,
    signIn
};