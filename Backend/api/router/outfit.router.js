const router = require('express').Router()
const {getAllOutfits, getOneOutfit, createOutfit, updateOutfit, deleteOutfit} = require ('../controllers/oufit.controllers.js')

router.get('/', getAllOutfits)
router.get('/:id', getOneOutfit)
router.post('/', createOutfit)
router.put('/:id', updateOutfit)
router.delete('/:id', deleteOutfit)

module.exports = router