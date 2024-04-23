const router = require('express').Router()
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controllers.js')
const { checkAdmin, checkAuth } = require('../middlewares/auth.js')

router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/:id', checkAuth, getOneUser)
router.post('/', checkAuth, createUser)
router.put('/:id', checkAuth, updateUser)
router.delete('/:id', checkAuth, deleteUser)

module.exports = router