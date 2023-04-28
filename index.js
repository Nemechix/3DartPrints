require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const api = express();
const cors = require('cors')

app.use(cors())

const {
    checkConnection,
    syncModels
} = require('./database/index')

const addRelationsToModels = require('./database/relations')

async function startDB() {
    await checkConnection()
    await addRelationsToModels()
    await syncModels('alter')

}

function startExpress() {
    const app = express()
        .use(express.json())
        .use(morgan('dev'))

        .use('/api', require('./api/routes/index'))

        .listen(process.env.PORT, () => {
            console.log(`Listenting on port ${process.env.PORT}`)
        })
}

async function start() {
    await startDB()
    startExpress()
}

start()
