const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arrayLimit = (val) => val.length <= 4;

const QuestionSchema = new Schema({
  questionId: { type: Number, unique: true },

  options: {
    type: Array,
    validate: [arrayLimit, '{PATH} exceeds the limit of 4']
  },

  rightAnswer: {
    type: Number,
    required: true
  },

  explanation: {
    type: String,
    default: "",
    required: true
  },
  
  quizId: {
    type: String,
    required: true
  },

  CreatedAt: { type: String, default: Date.now() }
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
