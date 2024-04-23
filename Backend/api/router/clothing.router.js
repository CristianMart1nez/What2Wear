const router = require('express').Router()
const {getAllClothings, getOneClothing, createClothing, updateClothing, deleteClothing} = require('../controllers/clothing.controllers.js')

router.get('/', getAllClothings)
router.get('/:id', getOneClothing)
router.post('/', createClothing)
router.put('/:id', updateClothing)
router.delete('/:id', deleteClothing)

module.exports = router