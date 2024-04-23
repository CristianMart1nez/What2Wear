const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const { checkConnection, syncModels } = require('./db/index.js')
const initializeRelations = require('./db/relations.js')

async function checkAndSync() {
    try {
        await checkConnection()
        initializeRelations()
        await syncModels()
    } catch (error) {
        console.log('Error checkAndSync: ', error)
    }
}

async function initializeAndListen() {
    const app = express()
        .use(express.json())
        .use(cors())
        .use(morgan('dev'))
        .use('/api', require('./api/router/index.js'))
        .use(express.static('./public'))
        .listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })
}

async function startApi() {
    await checkAndSync()
    initializeAndListen()
}

startApi()