const User = require('../api/models/user.models')
const Design = require('../api/models/design.models')
const Printer = require('../api/models/printer.models')
const Category = require('../api/models/category.models')
const Material = require('../api/models/material.models')

User.hasMany(Design)
Design.belongsTo(User)

Design.belongsToMany(Category)
Category.belongsToMany(Design)

User.hasMany(Printer)
Printer.belongsToMany(User)



module.exports = Relations



