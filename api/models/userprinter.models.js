const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

 const UserPrinter = sequelize.define(
    'user_printer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    { updatedAt: false }
) 

module.exports = UserPrinter