const express = require("express");
const app = express();
require("dotenv").config();
const env = process.env;
const startServer = require("./config/startServer");
const routes = require("./v1/routes");

// App routes
app.use(routes);

// Start server and connect DB
startServer(app);
