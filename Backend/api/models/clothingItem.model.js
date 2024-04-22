const { DataTypes } = require('sequelize')
const { connection } = require('../../db/index.js')

const ClothingItem = connection.define('clothingItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.STRING
  },
  color: {
    type: DataTypes.STRING
  },
  brand: {
    type: DataTypes.STRING
  },
  img_url: {
    type: DataTypes.STRING
  },
  favourite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  creation_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
},
  {
    timestamps: false,
  }
)

module.exports = ClothingItem