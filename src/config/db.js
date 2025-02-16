require('dotenv/config');
const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        const connectionString = `mongodb+srv://${process.env.DB_ADMIN}:` + 
                                 `${process.env.DB_PASSWORD}@cluster0.9nuwf.` +
                                 `mongodb.net/loveIsland?retryWrites=true&w=majority` +
                                 `&appName=Cluster0`;

        await mongoose.connect(connectionString);
        console.log('Successfully connected to database...');
    } catch (err) {
        console.log('Error connecting to databse:\n', err);
    }
};

module.exports = connectToDB;