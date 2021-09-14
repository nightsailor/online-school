const express = require('express')

const AuthCtrl = require('../controllers/auth')

const router = express.Router()

router.post('/register', AuthCtrl.create)
router.post('/login', AuthCtrl.verify)

module.exports = router