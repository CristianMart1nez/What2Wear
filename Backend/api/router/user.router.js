const router = require('express').Router()
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controllers.js')

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router