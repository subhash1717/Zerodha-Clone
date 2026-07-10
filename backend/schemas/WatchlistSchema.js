const { Schema } = require("mongoose");

const watchlistSchema = new Schema({
    product: String,
    name: String,
    qty:Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = { HoldingsSchema }