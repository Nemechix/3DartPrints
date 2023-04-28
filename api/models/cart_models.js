const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Cart = sequelize.define(
    'cart',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { updatedAt: false }
)

module.exports = Cart