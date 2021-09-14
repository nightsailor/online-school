const Quiz = require("../models/Quiz");

// Create a Quiz
createOne = async (req, res) => {
  try {
    const newQuiz = new Quiz({
      quizId: req.body.quizId,
      name: req.body.quizName,
      instructions: req.body.quizDesc || "",
      duration: {
        hours: parseInt(req.body.duration.substr(0,2)),
        minutes: parseInt(req.body.duration.substr(2,2)),
        seconds: parseInt(req.body.duration.substr(4,2))
      },
      answers: [],
    });
    const quiz = await newQuiz.save();

    res.status(200).json(quiz);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
};

// Add Solved Question
updateAnswer = async (req, res) => {
  try {
    const {userId, ...selection} = req.body;

    const quiz = await Quiz.findOne({ quizId: req.params.testId });
    if(!quiz) return res.status(404).json("quiz not found");

    let index = quiz.answers.findIndex(el => el.userId === userId);

    if (index === -1) {
      const options = {
        userId,
        options: [selection],
      };
      quiz.answers.push(options);
      ++index;
    } else {
      const ind = quiz.answers[index].options.findIndex(
        (el) => el.questionId === req.body.questionId
      );

      if (ind === -1) quiz.answers[index].options.push(selection);
      else quiz.answers[index].options[ind] = selection;
    }

    const updatedQuiz = await quiz.save();
    const data = updatedQuiz.answers[index];

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
};

// Get All Quizes
findAll = async (req, res) => {
  try {
    const quiz = await Quiz.find({});
    if(!quiz) return res.status(404).json("no quiz found");

    res.status(200).json(quiz)
  } catch (err) {
    res.status(500).json(err)
  }
};

// Retrieve a Single Quiz with Quiz Id
findOneById = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ quizId: req.params.testId });
    if(!quiz) return res.status(404).json("quiz not found");

    res.status(200).json(quiz)
  } catch (err) {
    res.status(500).json(err)
  }
};

module.exports = {
  createOne,
  updateAnswer,
  findAll,
  findOneById
};
