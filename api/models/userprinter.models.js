const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const User = require('./user')
const Printer = require('./printer')

const UserPrinter = sequelize.define(
    'userprinter', {},
    { updatedAt: false }
)

User.belongsToMany(Printer, { through: 'userprinter' })
Printer.belongsToMany(User, { through: 'userprinter' })

module.exports = UserPrinter