const schedule = require('node-schedule');
const tweetRandom = require('./tweetRandom');
const config = require('./config');
const express = require('express');

const app = express();

let lastTweet = '';

app.get('/', (req, res) => {
    res.write('<div><strong>ForesterTweetBot</strong></div>');
    res.write('<div><a href="https://www.twitter.com/Forester_TN">https://www.twitter.com/Forester_TN</a></div>');
    res.write('<div><strong>Last tweet:</strong> ' + lastTweet);
    res.end();
});

app.get('/tweet', (req, res) => {
 	tweetRandom((tweet) => {
 		lastTweet = tweet;
 		res.write(tweet);
	    res.end();
 	});
});

module.exports = app;
