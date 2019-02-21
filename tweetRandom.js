const Tabletop = require('tabletop');
const random = require('random');

const config = require('./config');
const bot = require('./bot');

function tweetRandom(data, tabletop) {
    if (data == null || data.length < 1) {
        console.log('spreadsheet empty');
        return;
    }

    console.log(`Found ${data.length} rows`);
    const randomInt = random.int(0, data.length - 1);

    const obj = data[randomInt];
    if (obj == null || obj[config.headerName] == null) {
        console.log('unreadable row');
        return;
    }

    const value = obj[config.headerName];

    console.log(`Random at idx:${randomInt} is "${value}"`);

    bot.tweet(value);
}

function init() {
    Tabletop.init({
        key: config.googleSheetUrl,
        callback: tweetRandom,
        simpleSheet: true
    });
}

module.exports = init;