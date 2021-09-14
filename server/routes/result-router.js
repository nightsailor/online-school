const express = require('express')

const ResultCtrl = require('../controllers/Result-ctrl')

const router = express.Router()

router.post('/saveResult', ResultCtrl.createOne)
router.get('/showResult', ResultCtrl.findOneById)
router.get('/findAllResults', ResultCtrl.findAll)

module.exports = router