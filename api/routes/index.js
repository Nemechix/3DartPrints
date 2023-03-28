const router = require('express').Router()

router.use('/user', require('./user.routes'))
router.use('/design', require('./design.routes'))


module.exports = router