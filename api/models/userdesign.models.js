const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

User.belongsToMany(Design, { through: UserDesign })
Design.belongsToMany(User, { through: UserDesign })

module.exports = UserDesign