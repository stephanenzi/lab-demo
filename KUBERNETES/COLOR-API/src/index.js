const express = require('express');

const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('<h1 style="color: blue;">Hello World from color-api!</h1>');
});

app.listen(port, () => {
    console.log(`Color API listening at http://localhost:${port}`);
});