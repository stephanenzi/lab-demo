const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World! from Multistage Build'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`)
})