const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Category = sequelize.define(
    'category',
    {
        name: {
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

module.exports = Category