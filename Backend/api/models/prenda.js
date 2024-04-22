
const {DataTypes}= require('sequelize')

const Prenda = sequelize.define('Prenda', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: DataTypes.STRING(50),
    color: DataTypes.STRING(50),
    marca: DataTypes.STRING(100),
    imagen_url: DataTypes.STRING(255),
    favorito: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  });