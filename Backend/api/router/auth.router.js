const { SignUp, Login } = require('../controllers/auth.controllers.js')
const router = require('express').Router()

router.post('/signup', SignUp)
router.post('/login', Login)

module.exports = router