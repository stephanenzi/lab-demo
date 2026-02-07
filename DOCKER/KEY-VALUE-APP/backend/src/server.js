const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { keyValueRouter } = require('./routes/store');
const { healthRouter } = require('./routes/health');

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use('/store', keyValueRouter);
app.use('/health', healthRouter);

// Connect to MongoDB
console.log('Connecting to MongoDB...');
mongoose.connect(`mongodb://${process.env.MONGODB_HOST}/${process.env.KEY_VALUE_DB}`, {
    auth: {
        username: process.env.KEY_VALUE_USER,
        password: process.env.KEY_VALUE_PASSWORD
    },
    connectTimeoutMS: 500,
})
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('MongoDB connection error:');
        console.error(err);
        process.exit(1);
    }
    );
