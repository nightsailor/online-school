const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  questionId: {
    type: Number,
    required: true
  },
  option: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4]
  }
});

const answerSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  
  options: [optionSchema]
});

const QuizSchema = new Schema({
  quizId: {
      type: String,
      required: true,
      unique: true
    },

    name: {
        type: String,
        required: true,
    },

    instructions: {
        type: String,
    },

    isEnabled: {
        type: Boolean,
        default: true
    },

    duration :{
      hours : {
        type : Number,
        default: 0,
        min: 0,
        max: 24
      },

      minutes : {
        type : Number,
        default: 0,
        min: 0,
        max: 60
      },

      seconds : {
        type : Number,
        default: 0,
        min: 0,
        max: 60
      }

    },

    answers: [answerSchema]
}, {
    timestamps: true
});

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;