require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const app = express();


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
        app.use(cors())
        app.use(express.json())
        app.use(morgan('dev'))

        app.get('api/user/:id', function (req, res, next) {
            res.json({msg: 'This is CORS-enabled for all origins!'})
          })

          app.get('/user/:id', function (req, res, next) {
            res.json({msg: 'This is CORS-enabled for all origins!'})
          })

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
