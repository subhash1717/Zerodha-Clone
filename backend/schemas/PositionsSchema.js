const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

module.exports = { PositionsSchema }