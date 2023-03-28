const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Software = sequelize.define(
    'software',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        version: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { updatedAt: false }

)

module.exports = Software