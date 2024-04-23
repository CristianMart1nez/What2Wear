const router = require('express').Router()

router.use('/user', require('./user.router'))
router.use('/clothing',require ("./clothing.router"))
module.exports = router 