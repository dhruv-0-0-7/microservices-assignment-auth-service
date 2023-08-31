const { Router } = require('express');
const { emailQueueListener } = require('./auth.service');

const authController = Router();

// Activating QueueListener for 'SEND_MAIL' queue
emailQueueListener();

// Example Route
authController.get('/status', (req, res) => {
    res.send({ message: 'Auth Service Success' });
});

module.exports = authController;