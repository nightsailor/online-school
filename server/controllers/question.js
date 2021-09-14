const Question = require("../models/Question");

// Create a Question
createOne = async (req, res) => {
  try {
    const maxObj = await Question.aggregate([
      {
        $group : { _id: '$quizId', maxValue: { $max: '$questionId' } }
      }
    ]);

    const questionId = maxObj.length === 0? 1: maxObj[0].maxValue + 1;

    //create new user
    const newQuestion = new Question({
      questionId: questionId,
      quizId: req.params.testId,
      explanation: req.body.questionDesc,
      rightAnswer: req.body.answer,
      options: req.body.options
    });

    //save user and respond
    const question = await newQuestion.save();
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json(err)
  }
};

// Get All Questions
findAll = async (req, res) => {
  try {
    const question = await Question.find({ quizId: req.params.testId });
    if(!question) return res.status(404).json("user not found");

    res.status(200).json(question)
  } catch (err) {
    res.status(500).json(err)
  }
};

// Retrieve a Single Quiz with Quiz Id and Question Id
findOneById = async (req, res) => {
  try {
    const question = await Question.findOne({ questionId: Number(req.params.questionId) });
    if(!question) return res.status(404).json("user not found");

    res.status(200).json(question)
  } catch (err) {
    res.status(500).json(err)
  }
};

module.exports = {
  createOne,
  findAll,
  findOneById
}
