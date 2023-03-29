const router = require('express').Router()

const {
    getAllSoftWare, createSoftWare, updateSoftWareById, deleteSoftWareById, getSoftWareById
} = require('../controllers/software.controller')
const { checkAuth, checkAdmin } = require('../middleware/auth')


router.get('/', getAllSoftWare)
router.get('/:id', getSoftWareById)
router.post('/', checkAuth, checkAdmin, createSoftWare)
router.put('/:id', checkAuth, checkAdmin, updateSoftWareById)
router.delete('/:id', checkAuth, checkAdmin, deleteSoftWareById)



module.exports = router