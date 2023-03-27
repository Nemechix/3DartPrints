const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Printed = sequelize.define(
    'printed',
    {
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tech: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        speed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dimensions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { updatedAt: false }
)

module.exports = Printed