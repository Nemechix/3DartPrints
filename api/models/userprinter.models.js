const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const User = require('./user.models')
const Printer = require('./printer.models')

const UserPrinter = sequelize.define(
    'userprinter', {},
    { updatedAt: false }
)

User.belongsToMany(Printer, { through: 'userprinter' })
Printer.belongsToMany(User, { through: 'userprinter' })

module.exports = UserPrinter