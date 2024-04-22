const {DataTypes}= require('sequelize')
//const {connection}= require(../../)

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING(100),
  correo_electronico: DataTypes.STRING(100),
  contraseña: DataTypes.STRING(100),
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});
module.exports = Usuario