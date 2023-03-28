const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
// const Order = require('./order.models')
// const Design = require('./design.models')

const OrderDesign = sequelize.define(
    'orderdesing', {
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { updatedAt: false }
)

// Design.belongsToMany(Order, { through: 'orderdesing' })
// Order.belongsTo(Design, { through: 'orderdesing' })

module.exports = OrderDesign