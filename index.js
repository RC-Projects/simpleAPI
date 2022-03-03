const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Configure logging
var home = "/api";
var log4js = require("log4js");
log4js.configure({
  appenders: { Main: { type: "file", filename: `${home}/api.log` } },
  appenders: { System: { type: "file", filename: `${home}/api.log` } },
  categories: { default: { appenders: ["Main"], level: 'info' } },
  categories: { default: { appenders: ["System"], level: 'error' } }
});
var logger = log4js.getLogger("Index");
logger.level = "info";

//CreaTe express app
const app = express();

//Database
mongoose.connect('mongodb://localhost/api', {
  useNewURLParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => {
  logger.info("Conected to Database...");
});


//Middleware
app.use(bodyParser.json());

//Routes
app.get('/test', (req, res) => {
  res.send("This is a reply to test.\n");
});

const QuotesRoutes = require('./routes/Quotes');
app.use('/quotes', QuotesRoutes);


//Starting server
app.listen(6666, logger.info("Listening on port 6666"));
