const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Printed = sequelize.define(
    'printed',
    {
        trademark: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { updatedAt: false }
)

module.exports = Printed