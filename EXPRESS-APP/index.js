const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const users = [];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Get registered user
app.get('/user', (req, res) => {
    return res.json({ users });
})

// Register a new user
app.post('/users', (req, res) => {
    const newUserId = req.body.userId;
    if (!newUserId) {
        return res.status(400).send('Missing userId in request body ');
    }

    if (users.includes(newUserId)) {
        return res.status(409).send('User already exists');
    }

    users.push(newUserId);
    return res.status(201).send(`User ${newUserId} registered successfully`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});