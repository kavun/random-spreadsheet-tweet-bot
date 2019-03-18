const schedule = require('node-schedule');
const sheetHelper = require('./sheetHelper');
const config = require('./config');
const express = require('express');
const Liquid = require('liquidjs');

const app = express();

const engine = new Liquid({
  root: __dirname, // for layouts and partials
  extname: '.liquid'
});

// register liquid engine
app.engine('liquid', engine.express()); 
app.set('views', './views');            // specify the views directory
app.set('view engine', 'liquid');       // set to default

let lastTweet = '';

app.get('/', (req, res) => {
    res.write('<div><strong>ForesterTweetBot</strong></div>');
    res.write('<div><a href="https://www.twitter.com/Forester_TN">https://www.twitter.com/Forester_TN</a></div>');
    res.write('<div><strong>Last tweet:</strong> ' + lastTweet);
    res.end();
});

app.get('/tweet', (req, res) => {
 	sheetHelper.init(() => {
 		sheetHelper.tweetRandom((tweet) => {
	 		lastTweet = tweet;
	 		res.write(tweet);
		    res.end();
	 	});
 	});
});

app.get('/mysong/:name', function (req, res) {
	sheetHelper.init(() => {
 		const row = sheetHelper.getRowAtIdx(12);
		res.render('mysong', {
			name: req.params.name,
			spotifyuri: row.spotifyuri
		});
 	});
});

module.exports = app;
