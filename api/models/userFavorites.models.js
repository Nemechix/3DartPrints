const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const UserFavorites = sequelize.define(
    'user_favorites', 
    {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    designId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'designs',
        key: 'id'
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });

module.exports = UserFavorites