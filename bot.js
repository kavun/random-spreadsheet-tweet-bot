const Twit = require('twit')
const config = require('./config')

const bot = new Twit(config);

module.exports = {
    tweet: (status, callback = () => {}) => {
        bot.post('statuses/update', { status }, (err, response, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Tweeted: ${response.text}`);
                callback(response.text);
            }
        });
    }
}
