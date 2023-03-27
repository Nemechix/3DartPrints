const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Printer = sequelize.define(
    'printer',
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
        resolution: {
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

module.exports = Printer