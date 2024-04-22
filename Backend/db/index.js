const { Sequelize } = require('sequelize')

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false
})

async function checkConnection() {
    try {
        await connection.authenticate()
        console.log('Database connected')
    } catch (error) {
        console.log('Error checkConnection: ', error)        
    }
}

async function syncModels() {
    try {
        await connection.sync()
    } catch (error) {
        console.log('Error syncModels: ', error)
    }
}

module.exports = {
    checkConnection,
    syncModels
}