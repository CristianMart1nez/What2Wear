const User = require('../api/models/user.model.js')
const ClothingItem = require('../api/models/clothingItem.model.js')
const Outfit = require('../api/models/outfit.model.js')

const initializeRelations = () => {
    try {
        User.hasMany(Outfit)
        Outfit.belongsTo(User)

        User.hasMany(ClothingItem)
        ClothingItem.belongsTo(User)

        Outfit.belongsToMany(ClothingItem, {through: 'Outfit_ClothingItem'})
        ClothingItem.belongsToMany(Outfit, {through: 'Outfit_ClothingItem'})
    } catch (error) {
        console.log('Error initializeRelations: ', error)
    }
}

module.exports = initializeRelations