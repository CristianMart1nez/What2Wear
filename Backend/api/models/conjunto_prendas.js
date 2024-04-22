const {DataTypes}= require('sequelize')



const Conjunto_Prenda = sequelize.define('Conjunto_Prenda', {});


Usuario.hasMany(Conjunto);
Conjunto.belongsTo(Usuario);

Usuario.hasMany(Prenda);
Prenda.belongsTo(Usuario);

Conjunto.belongsToMany(Prenda, { through: 'Conjunto_Prenda' });
Prenda.belongsToMany(Conjunto, { through: 'Conjunto_Prenda' });
