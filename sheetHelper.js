const Tabletop = require('tabletop');
const random = require('random');

const config = require('./config');
const bot = require('./bot');

let rows = null;
let tabletop = null;

function tweetRandom(callback = () => {}) {
    const randomInt = random.int(0, rows.length - 1);
    const row = getRowAtIdx(randomInt);

    if (row == null || row[config.headerName] == null) {
        console.log('unreadable row');
        return;
    }
    const value = row[config.headerName];

    console.log(`Random at idx:${randomInt} is "${value}"`);

    bot.tweet(value, callback);
}

function getRowAtIdx(idx) {
    if (rows == null || rows.length < 1) {
        console.log('spreadsheet empty');
        return;
    }

    console.log(`Found ${rows.length} rows`);

    if (idx < 0 || idx >= rows.length) {
        console.log('bad index, out of range');
        return null;
    }

    const row = rows[idx];
    if (row == null) {
        console.log('unreadable row');
        return null;
    }

    return row;
}

function init(callback = () => {}) {
    Tabletop.init({
        key: config.googleSheetUrl,
        callback: (data, _tabletop) => {
            rows = data;
            tabletop = _tabletop;
            callback(rows, tabletop);
        },
        simpleSheet: true
    });
}

module.exports = {
    init: init,
    tweetRandom: tweetRandom,
    getRowAtIdx: getRowAtIdx,
};
