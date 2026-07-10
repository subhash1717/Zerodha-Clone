const { model } = require("mongoose");

const { WatchlistSchema } = require('../schemas/WatchlistSchema');

const WatchlistSchema = new model("watchlist", WatchlistSchema);

module.exports = { HoldingsSchema };