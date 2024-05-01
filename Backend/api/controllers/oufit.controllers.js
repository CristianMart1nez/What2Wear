const Outfit = require('../models/outfit.model')
const ClothingItem = require('../models/clothingItem.model')
const User = require('../models/user.model')

async function getAllOutfits(req, res) {
    try {
        const outfits = await Outfit.findAll({ paranoid: false})
        if(outfits) {
            return res.status(200).json(outfits)
        } else {
            return res.status(404).send('No outfits found') 
        }
    } catch (error) { 
        res.status(500).send(error.message)
    }
}

async function getOneOutfit(req, res) {
    try {
        const outfit = await Outfit.findByPk(req.params.id)
        if(outfit) {
            return res.status(200).json(outfit)
        } else {
            return res.status(404).send('Outfit not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createOutfit(req, res) {


    try {
        const outfit = await Outfit.create({
            userId: req.body.userId
        })

        await req.body.clothingIds.map(async(clothingId) => {
            const clothingItem = await ClothingItem.findByPk(clothingId)

            if(clothingItem) {
                await outfit.addClothingItem(clothingItem)
            }
        })

        return res.status(200).json({
            message: 'Outfit created',
            outfit: outfit
        })

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


async function updateOutfit(req, res) {
    try {
        const [outfitExist, outfit] = await Outfit.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            }
        })
    
        if(outfitExist !== 0) {
            return res.status(200).json({
                message: 'Outfit updated',
                outfit: outfit
            })
        } else {
            return res.status(404).send('Outfit not found')
        } 
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOutfit(req, res) {
    try {
        const outfit = await Outfit.destroy({
            where: {
                id: req.params.id
            }
        })

        if(outfit) {
            return res.status(200).json({
                message: 'Outfit deleted',
                outfit: outfit
            })
        } else {
            return res.status(404).send('Outfit not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getUserOutfits(req, res) {
    console.log(req)
    try {
        const user = await User.findOne({
            where: {
                email: res.locals.user.email 
            },
            include: [
                {
                    model: Outfit,
                    include: ClothingItem
                }
            ]
        })
        if(user) {
            return res.status(200).json(user.outfits)
        } else {
            return res.status(404).send('No outfits found') 
        }
    } catch (error) { 
        res.status(500).send(error.message)
    }
}




module.exports = {
    getAllOutfits,
    getOneOutfit,
    createOutfit,
    updateOutfit,
    deleteOutfit,
    getUserOutfits
}