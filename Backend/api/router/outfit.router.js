const router = require('express').Router()
const {getAllOutfits, getOneOutfit, createOutfit, updateOutfit, deleteOutfitById, getUserOutfits} = require ('../controllers/oufit.controllers.js')
const { checkAuth } = require('../middlewares/auth.js')

router.get('/favourite', checkAuth, getUserOutfits)
router.delete('/favourite/:id', deleteOutfitById)

router.get('/', getAllOutfits)
router.get('/:id', getOneOutfit)
router.post('/', createOutfit)
router.put('/:id', updateOutfit)


module.exports = router 