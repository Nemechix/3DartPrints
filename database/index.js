const { Sequelize } = require('sequelize')
// const Design = require('../api/models/design.models')

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: process.env.DIALECT,
	port: process.env.DBPORT,
	logging: false
})

async function checkConnection() {
	try {
		await sequelize.authenticate()
		console.log('Connection Succesful!')
	} catch (error) {
		throw error
	}
}

async function syncModels(value) {
	const state = {
		alter: { alter: true },
		force: { force: true },
	}

	try {
		await sequelize.sync(state[value] || '')
		console.log(`All models were synchronized successfully using sync(${JSON.stringify(state[value]) || ''}).`)
	} catch (error) {
		throw error
	}
}

module.exports = {
	sequelize,
	checkConnection,
	syncModels
}