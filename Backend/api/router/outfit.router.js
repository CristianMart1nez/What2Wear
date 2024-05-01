const router = require('express').Router()
const {getAllOutfits, getOneOutfit, createOutfit, updateOutfit, deleteOutfit, getUserOutfits} = require ('../controllers/oufit.controllers.js')
const { checkAuth } = require('../middlewares/auth.js')

router.get('/favourite', checkAuth, getUserOutfits)

router.get('/', getAllOutfits)
router.get('/:id', getOneOutfit)
router.post('/', createOutfit)
router.put('/:id', updateOutfit)
router.delete('/:id', deleteOutfit)

module.exports = router 