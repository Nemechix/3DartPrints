const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const DesignCategory = sequelize.define(
    'design_category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},
    { updatedAt: false }
)

module.exports = DesignCategory