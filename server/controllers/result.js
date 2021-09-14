const Result = require("../models/Result");

createOne = async (req, res) => {
  try {
    var myDate = new Date();

    var newResult = new Result({
      userID: req.body.userID,
			userName: req.body.userName,
      quizId: req.body.quizId,
      userResult: req.body.user_result,
      date: myDate,
    });

    const result = await newResult.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

findOneById = async(req, res) => {
	try {
    const result = await Result.findOne({ userID: req.body.userID, quizId: req.body.quizId });
    if (!result) {
      res.json({ success: false, data: "Record not Found" });
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

findAll = async(req, res) => {
	try {
    const result = await Result.find({ quizId: req.body.quizId });
		
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createOne,
  findOneById,
  findAll
};