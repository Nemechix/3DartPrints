require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const app = express();
const stripe = require('stripe')('sk_test_51N4PBRLq0Q7kbXgYAxRg1hiePFEE5E5QVivcLfo1S3qIfz6prhLArOpy1iaF9ZkZqU2rTqErJjm9GcGwWgWhmpck00nvP7r8Ak')


const {
    checkConnection,
    syncModels
} = require('./database/index')

const addRelationsToModels = require('./database/relations')

async function startDB() {
    await checkConnection()
    await addRelationsToModels()
    await syncModels()

}


function startExpress() {
        app.use(cors())
        app.use(express.static("public"))
        app.use(express.json())
        app.use(morgan('dev'))
        app.use('/api', require('./api/routes/index'))
        app.listen(process.env.PORT, () => {
            console.log(`Listenting on port ${process.env.PORT}`)
        })
}

async function start() {
    await startDB()
    startExpress()
}

start()
