require('dotenv/config');
const express = require('express');
const http = require('http');
const connectToDB = require('./src/config/db');
const router = require('./src/mainRouter');
const { initSocket } = require('./socket');

const app = express();

connectToDB();

const server = http.createServer(app);

app.use(express.json());
app.use('/api/v1/love-island', router);

const PORT = process.env.PORT || 8000;

initSocket(server);

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});