const tweetRandom = require('./tweetRandom');
const config = require('./config');

tweetRandom();

setInterval(tweetRandom, config.intervalMs);