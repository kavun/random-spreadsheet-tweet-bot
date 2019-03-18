const sheetHelper = require('./sheetHelper');
const config = require('./config');

sheetHelper.init((rows, tabletop) => {
	sheetHelper.tweetRandom();
});
