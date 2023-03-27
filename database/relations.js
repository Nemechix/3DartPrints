const User = require('../api/models/user.models')
const Design = require('../api/models/design.models')
const Printer = require('../api/models/printer.models')
const Category = require('../api/models/category.models')
const Material = require('../api/models/material.models')
const Order = require('../api/models/order.models')


//table Order_designs
User.hasMany(Design)
Design.belongsTo(User)

//table design_category
Category.hasMany(Design)
Design.belongsTo(Category)

//table user_printer
User.belongsToMany(Printer, { through: 'user_printer' })
Printer.belongsToMany(User, { through: 'user_printer' })


//table printer_materials
Material.belongsToMany(User, Printer, { through: 'printer_materials' })
User.belongsToMany(Printer, Material, { through: 'printer_materials' })
Printer.belongsToMany(User, Material, { through: 'printer_materials' })

//table order_prints
Order.hasOne(User)
Order.hasOne(Design)
Order.hasOne(Printer)
Order.hasOne(Material)
User.belongsTo(Order)
Design.belongsTo(Order)
Printer.belongsTo(Order)
Material.belongsToMany(Order)



module.exports = Relations

