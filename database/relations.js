const User = require('../api/models/user.models')
const Design = require('../api/models/design.models')
const Software = require('../api/models/software.models')
const Printer = require('../api/models/printer.models')
const UserPrinter = require('../api/models/userprinter.models')
const Category = require('../api/models/category.models')
const Material = require('../api/models/material.models')
const OrderPrints = require('../api/models/orderprints.models')
/* const OrderDesign = require('../api/models/orderdesign.models')
 */
function addRelationsToModels() {
    try {

        User.hasMany(Design)
        Design.belongsTo(User)

        //table design_category
        Category.belongsToMany(Design, { through: 'design_category' })
        Design.belongsToMany(Category, { through: 'design_category' })


        //table design_software
        Software.belongsToMany(Design, { through: 'design_software' })
        Design.belongsToMany(Software, { through: 'design_software' })


        //table printer_materials
        Material.belongsToMany(UserPrinter, { through: 'printer_materials' })
        UserPrinter.belongsToMany(Material, { through: 'printer_materials' })

        //table orderprints
        User.hasMany(OrderPrints)
        Design.hasMany(OrderPrints)
        Printer.hasOne(OrderPrints)
        Material.hasOne(OrderPrints)
        OrderPrints.belongsTo(User, { as: 'seller' })
        OrderPrints.belongsTo(User, { as: 'client' })
        OrderPrints.belongsTo(Design)
        OrderPrints.belongsTo(Printer)
        OrderPrints.belongsTo(Material)

        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels