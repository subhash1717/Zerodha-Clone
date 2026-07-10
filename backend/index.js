const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(PORT, () => {
    console.log("port is listening to", PORT);
    mongoose.connect(uri);
    console.log("Db connected")
});

