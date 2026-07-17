const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

const app = express();

const frontendBuild = path.join(__dirname, "..", "frontend", "build");
const dashboardBuild = path.join(__dirname, "..", "dashboard", "build");

app.use(express.json());

app.use("/dashboard", express.static(dashboardBuild));

app.use(express.static(frontendBuild));

app.get("/dashboard/*", (req, res) => {
  res.sendFile(path.join(dashboardBuild, "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendBuild, "index.html"));
});

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

