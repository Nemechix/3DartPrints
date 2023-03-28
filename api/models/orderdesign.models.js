const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const Order = require('./orderprints.models')
const Design = require('./design.models')

const OrderDesign = sequelize.define(
    'orderdesing', {},
    { updatedAt: false }
)

Design.hasMany(Order, { through: 'orderdesing' })
Order.belongsTo(Design, { through: 'orderdesing' })

module.exports = OrderDesign