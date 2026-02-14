const express = require('express');
const os = require('os');

const app = express();
const port = 80;

const hostname = os.hostname();
const color = 'blue';

app.get('/', (req, res) => {
    res.send(`<h1 style="color: ${color};">Hello World from color-api!</h1>
<h2>Hostname: ${hostname}</h2>`);
});

app.get('/api', (req, res) => {
    const format = req.query.format

    if (format === 'json') {
        return res.json({ 
            color,
            hostname
        });
    } else {
        return res.send(`Color: ${color}, Hostname: ${hostname}`);
    }
});

app.listen(port, () => {
    console.log(`Color API listening at http://localhost:${port}`);
});