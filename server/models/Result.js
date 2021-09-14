const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
	userID: String,
	userName: String,
	quizId: String,
	userResult: Array,
	date: { type: String, default: Date.now() }
});

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;