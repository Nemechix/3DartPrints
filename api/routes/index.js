const router = require('express').Router()

router.use('/user', require('./user.routes'))
router.use('/design', require('./design.routes'))
router.use('/printer', require('./printer.routes'))
router.use('/category', require('./category.routes'))


module.exports = router