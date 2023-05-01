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
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    { updatedAt: false }
)

module.exports = Printer