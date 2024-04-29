const { DataTypes }= require('sequelize')
const { connection } = require('../../db/index.js')

const Outfit = connection.define('outfit', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tag: {
      type: DataTypes.STRING
    },
    favouriteOutfit: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: false
    },
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  },
  {
    timestamps: false,
  }
);

  module.exports = Outfit