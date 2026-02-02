const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/api/notebooks', (req, res) => res.json({ message: 'Hello from notebooks' }));

const port=process.env.PORT

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
    console.log(`Notebooks backend server is running on port ${port}`);
});
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
