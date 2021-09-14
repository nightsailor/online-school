const express = require('express')

const QuizCtrl = require('../controllers/quiz')

const router = express.Router()

router.post('/create', QuizCtrl.createOne)
router.put('/answers/:testId', QuizCtrl.updateAnswer)
router.get('/quizzes', QuizCtrl.findAll)
router.get('/:testId', QuizCtrl.findOneById)

module.exports = router