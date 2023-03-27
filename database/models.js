const User = require('../api/models/user.models')
const Design = require('../api/models/design.models')
const Printed = require('../api/models/printed.models')
const UserDesign = require('../api/models/userdesign.models')

function addRelationsToModels() {
	try {
       //add models associations
		console.log('Relations added to all models')
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels