const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const OrderPrints = sequelize.define(
    'orderprints',
    {
        layer_height: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { updatedAt: false }
)

module.exports = OrderPrints