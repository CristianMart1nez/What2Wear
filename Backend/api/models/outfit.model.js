const { DataTypes, Sequelize}= require('sequelize')
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
    favourite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
  },
  {
    timestamps: false,
  }
);

  module.exports = Outfit