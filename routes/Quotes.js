const express = require('express');
const router = express.Router();
const Quote = require('../models/Quotes_model');

var log4js = require("log4js");
var logger = log4js.getLogger("Index");
logger.level = "info";

//Get all routes
router.get('/', async (req, res) => {
	const quotes = await Quote.find();
	res.json(quotes);
	logger.info("Retrned all quotes");
});

//Create new quote 
router.post('/new', async (req, res) => {
	const newQuote = new Quote(req.body);
	const savedQuote = await newQuote.save();
	logbody = req.body.new;
	qsaved = res.json(savedQuote);
	logger.info(`Quote  ${logbody} saved.`);
});


//Get a specific quote
router.get('/get/:id', async (req, res) => {
	const qid = await Quote.findById({_id: req.params.id});
	logID = req.params.id;
	res.json(qid);
	logger.info(`Retrned Quote ID: ${logID}`);
});

//Delete a quote
router.delete('/delete/:id', async(req, res) => {
	const result = await Quote.findByIdAndDelete({_id: req.params.id});
	logID = req.params.id;
	logger.info(`Delete quote: ${logID}`);
	res.json(result);
});

//Update a quote
router.patch('/update/:id', async (req, res) => {
	const qid = await Quote.updateOne({_id: req.params.id}, {$set: req.body});
	logreq = req.body.update;
	logID = req.params.id;
	res.json(qid);
	logger.info(`Updated quote ${logID} to: ${logreq}`);
});

//Return random quote
router.get('/random', async (req, res) => {
	const count = await Quote.countDocuments();
	const random = Math.floor(Math.random() * count);
	const qid = await Quote.findOne().skip(random);
	res.json(qid);
	logger.info(`Random quote: ${qid}`);
});



module.exports = router;