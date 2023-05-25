const express = require("express");
const app = express();
require("dotenv").config();
const env = process.env;
const startServer = require("./config/startServer");
const attachModels = require("./middlewares/attach-models");
const routes = require("./v1/routes");

// Built-in middleware for json
app.use(express.json());

// Attach models
app.use(attachModels);

// App routes
app.use(routes);

// Start server and connect DB
startServer(app);
