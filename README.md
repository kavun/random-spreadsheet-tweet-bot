# Random Spreadsheet Tweet Bot

- `./index.js` will pull a random cell value from a public Google Spreadsheet and tweet it
- `./now.js` exposes a `/tweet` route via express to do the same

## configure

### .env

    CONSUMER_KEY=pTlxxxxxxxxxxxxxxxuoY
    CONSUMER_SECRET=14tNNxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxSJ1R
    ACCESS_TOKEN=1097xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx0NPk
    ACCESS_TOKEN_SECRET=Y6k2GxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxiJk2b
    GOOGLE_SHEET_URL=https://docs.google.com/spreadsheets/d/1F9axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrdQo/edit?usp=sharing
    GOOGLE_SHEET_HEADER=header

### GOOGLE_SHEET_URL

https://www.npmjs.com/package/tabletop#if-your-publish-to-web-url-doesnt-work

### GOOGLE_SHEET_HEADER

the content of your first cell (header cell)

## run

    npm start

## deploy

- deploy to now (https://zeit.co/)
- hit the /tweet route on a schedule (I use https://cron-job.org)

### now.json

You can deploy `now.js` to now but you have to create a now.json file, and add your now secrets

    {
        "name": "MyTweetBot",
        "version": 2,
        "builds": [
            { "src": "now.js", "use": "@now/node" }
        ],
        "routes": [
            { "src": "/(.*)", "dest": "now.js" }
        ],
        "env": {
            "CONSUMER_KEY": "@ftb-consumer-key",
            "CONSUMER_SECRET": "@ftb-consumer-secret",
            "ACCESS_TOKEN": "@ftb-access-token",
            "ACCESS_TOKEN_SECRET": "@ftb-access-token-secret",
            "GOOGLE_SHEET_URL": "https://docs.google.com/spreadsheets/d/xxxxxxxxxxxxxxx/edit?usp=sharing",
            "GOOGLE_SHEET_HEADER": "header"
        }
    }