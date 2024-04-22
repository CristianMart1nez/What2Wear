const {DataTypes}= require('sequelize')

sequelize.sync()
  .then(() => {
    console.log('Models synced successfully');
  })
  .catch(err => {
    console.error('Error syncing models:', err);
  });