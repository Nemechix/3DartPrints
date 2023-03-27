const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Material = sequelize.define(
    'material',
    {
        material_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { updatedAt: false }
)

module.exports = Material