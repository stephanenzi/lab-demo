const express = require('express');
const app = express();
const port = 3000;
const users = [];

// Middleware to parse JSON bodies
app.use(express.json());  // Replaced body-parser with built-in middleware

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World! - My first Express App');
});

// Get registered users
app.get('/users', (req, res) => {
    return res.json({ users });
});

// Register a new user
app.post('/users', (req, res) => {
    const { userId } = req.body;
    if (!userId || typeof userId !== 'string' || userId.trim() === '') {
        return res.status(400).json({ error: 'Missing or invalid userId in request body' });
    }

    if (users.includes(userId)) {
        return res.status(400).json({ error: 'User already exists' });
    }

    users.push(userId);
    return res.status(201).json({ message: `User ${userId} registered successfully` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
