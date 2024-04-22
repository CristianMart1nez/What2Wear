const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('what2wear', 'cris', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define your models
const User = sequelize.define('User', {
  // Define user model fields
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

// Create the database tables
sequelize.sync({ force: true }) // This will drop existing tables and re-create them
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error creating database tables:', err);
  });
  module.exports =