const Clothing = require('../models/clothingItem.model.js')

async function getAllClothings(req, res) {
    try {
        const clothings = await Clothing.findAll({ paranoid: false})
        if(clothings) {
            return res.status(200).json(clothings)
        } else {
            return res.status(404).send('No clothings found') 
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneClothing(req, res) {
    try {
        const clothing = await Clothing.findByPk(req.params.id)
        if(clothing) {
            return res.status(200).json(clothing)
        } else {
            return res.status(404).send('Clothing not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createClothing(req, res) {
    try {
        const clothing = await Clothing.create({
            type: req.body.type,
            color:req.body.color,
            brand: req.body.brand,
            img_url: req.body.img_url
        })

        return res.status(200).json({
            message: 'Clothing created',
            clothing: clothing
        })

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


async function updateClothing(req, res) {
    try {
        const [clothingExist, clothing] = await Clothing.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            }
        })
    
        if(clothingExist !== 0) {
            return res.status(200).json({
                message: 'Clothing updated',
                clothing: clothing
            })
        } else {
            return res.status(404).send('Clothing not found')
        } 
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteClothing(req, res) {
    try {
        const clothing = await Clothing.destroy({
            where: {
                id: req.params.id
            }
        })

        if(clothing) {
            return res.status(200).json({
                message: 'Clothing deleted',
                clothing: clothing
            })
        } else {
            return res.status(404).send('Clothing not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllClothings,
    getOneClothing,
    createClothing,
    updateClothing,
    deleteClothing,
}