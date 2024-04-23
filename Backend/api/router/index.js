const router = require('express').Router()

router.use('/user', require('./user.router'))
router.use('/auth', require('./auth.router'))
router.use('/clothing',require ("./clothing.router"))
router.use('/outfit',require ("./outfit.router"))
module.exports = router 