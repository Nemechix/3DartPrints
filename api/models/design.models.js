const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Design = sequelize.define(
    'design',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        file: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    },
    { updatedAt: false }
)

module.exports = Design