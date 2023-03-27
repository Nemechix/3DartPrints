const User = require('../api/models/user.models')
const Design = require('../api/models/design.models')
const Printed = require('../api/models/printed.models')

User.belongsToMany(Design, { through: UserDesign })
Design.hasOne(User, { through: UserDesign })



module.exports = Relations