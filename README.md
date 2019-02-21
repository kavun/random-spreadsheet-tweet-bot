# Random Spreadsheet Tweeter

This will start a `setInterval` based on your `INTERVAL_MS` in the `.env` file and pull a random cell value from a public Google Spreadsheet and tweet it.

## .env

	CONSUMER_KEY=pTlxxxxxxxxxxxxxxxuoY
	CONSUMER_SECRET=14tNNxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxSJ1R
	ACCESS_TOKEN=1097xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx0NPk
	ACCESS_TOKEN_SECRET=Y6k2GxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxiJk2b
	GOOGLE_SHEET_URL=https://docs.google.com/spreadsheets/d/1F9axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrdQo/edit?usp=sharing
	GOOGLE_SHEET_HEADER=header
	INTERVAL_MS=5000

## GOOGLE_SHEET_URL

https://www.npmjs.com/package/tabletop#if-your-publish-to-web-url-doesnt-work

## GOOGLE_SHEET_HEADER

the content of your first cell (header cell)

## INTERVAL_MS = 1000 * 60 * 60 * 24

how often to tweet in milliseconds