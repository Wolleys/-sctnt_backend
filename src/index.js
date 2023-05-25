const express = require("express");
const app = express();
require("dotenv").config();
const env = process.env;
const startServer = require("./config/startServer");

// Start server and connect DB
startServer(app);
