const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/cs212/lab7', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/cs212/lab7', (req, res) => {
    const { pluralNoun, adjective, verb, color, animal } = req.body;

    // Your Mad Lib template
    const madLib = `Once upon a time, there were ${pluralNoun} living in a ${adjective} world. They loved to ${verb} and were known for their ${color} fur. One day, a wise ${animal} came to visit.`;

    res.send(madLib);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
