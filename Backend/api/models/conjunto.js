const {DataTypes}= require('sequelize')

const Conjunto = sequelize.define('Conjunto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    etiqueta: DataTypes.STRING(100),
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    favorito: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });