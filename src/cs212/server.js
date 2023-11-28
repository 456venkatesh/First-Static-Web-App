const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))

const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: true }));

server.get('/cs212/lab7', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.post('/cs212/lab7', (req, res) => {
    const { emotion, adjective, verb, color, celebrity, pluralNoun } = req.body;
	
	const loveQuotesMadLib = `Love is a journey filled with ${emotion} and ${adjective} moments. It's the kind of magic that makes our hearts ${verb}. Our love story is painted with the hues of a beautiful ${color} sky, and our bond is as timeless as a beloved ${celebrity}. We cherish the ${pluralNoun} that have enriched our lives.`;

    res.send(loveQuotesMadLib);
});

// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}

server.listen(port, () => console.log('Ready on localhost!'))
