const User = require('../api/models/user.models')
const Design = require('../api/models/design.models')
const Software = require('../api/models/software.models')
const Printer = require('../api/models/printer.models')
const UserPrinter = require('../api/models/userprinter.models')
const Category = require('../api/models/category.models')
const Material = require('../api/models/material.models')
const Order = require('../api/models/order.models')

function addRelationsToModels() {
    try {
        //table Order_designs
        User.hasMany(Design)
        Design.belongsTo(User)


        //table design_category
        Category.hasMany(Design)
        Design.belongsTo(Category)


        //table design_software
        Software.belongsToMany(Design, { through: 'design_software' })
        Design.belongsToMany(Software, { through: 'design_software' })


        //table printer_materials
        Material.belongsToMany(UserPrinter, { through: 'printer_materials' })
        UserPrinter.belongsToMany(Material, { through: 'printer_materials' })


        //table order_prints
        User.hasMany(Order)
        Order.hasMany(Design)
        Order.hasOne(Printer)
        Order.hasOne(Material)
        Order.belongsTo(User)
        Design.belongsTo(Order)
        Printer.belongsTo(Order)
        Material.belongsTo(Order)

        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels