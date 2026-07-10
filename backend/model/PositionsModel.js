const { model } = require("mongoose");

const { PositionsSchema } = require('../schemas/PositionsSchema');

const PositionsSchema = new model("position", PositionsSchema);

module.exports = { PositionsSchema };