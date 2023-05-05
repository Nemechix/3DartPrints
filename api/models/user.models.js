const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const User = sequelize.define(
    'user',
    {
        name: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        surname: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                is: {
                    args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    msg: "Error: Wrong email format."
                }
            }
        },
        birth: {
            type: DataTypes.DATE,
        },
        phone: {
            type: DataTypes.INTEGER,
        },
        address: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user',
        },
        designer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        printer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,

/*         createdAt: {
            type: DataTypes.STRING,
            defaultValue: function () {
                return new Date()
            }*/
        }, 
    },
    { updatedAt: false }

)
    
module.exports = User