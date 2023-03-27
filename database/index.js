const { Sequelize } = require('sequelize')

// Connect to PostgreSQL creating a new sequelize instance
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: process.env.DIALECT,
	port: process.env.DB_PORT,
	logging: false,
})

module.exports = { sequelize }