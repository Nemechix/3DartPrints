const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const User = require('user')
const Printer = require('printer')

const UserPrinter = sequelize.define(
    'userprinter', {},
    { updatedAt: false }
)

User.belongsToMany(Printer, { through: 'user_printer' })
Printer.belongsToMany(User, { through: 'user_printer' })

module.exports = UserPrinter