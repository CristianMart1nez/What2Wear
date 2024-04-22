const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

async function initializeAndListen() {
    const app = express()
        .use(cors())
        .use(morgan('dev'))
        .use(express.json())
        .use(express.static('./public'))
        .listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })
}

async function startApi() {
    initializeAndListen()
}

startApi()