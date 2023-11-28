const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/cs212/lab7', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/cs212/lab7', (req, res) => {
    const { emotion, adjective, verb, color, celebrity, pluralNoun } = req.body;
	
	const loveQuotesMadLib = `Love is a journey filled with ${emotion} and ${adjective} moments. It's the kind of magic that makes our hearts ${verb}. Our love story is painted with the hues of a beautiful ${color} sky, and our bond is as timeless as a beloved ${celebrity}. We cherish the ${pluralNoun} that have enriched our lives.`;

    res.send(loveQuotesMadLib);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
