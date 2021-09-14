const express = require('express')

const QuestionCtrl = require('../controllers/question')

const router = express.Router()

router.post('/create/:testId', QuestionCtrl.createOne)
router.get('/quiz/:testId', QuestionCtrl.findAll)
router.get('/:testId/:questionId', QuestionCtrl.findOneById)

module.exports = router