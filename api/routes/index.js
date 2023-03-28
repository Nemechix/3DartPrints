const router = require('express').Router()

router.use('/user', require('./user.routes'))
router.use('/design', require('./design.routes'))
router.use('/printer', require('./printer.routes'))
router.use('/category', require('./category.routes'))
router.use('/software', require('./software.routes'))


module.exports = router