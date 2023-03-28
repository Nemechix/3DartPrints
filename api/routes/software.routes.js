const router = require('express').Router()

const {
    getAllSoftWare, createSoftWare, updateSoftWareById, deleteSoftWareById, getSoftWareById
} = require('../controllers/software.controller')

router.get('/', getAllSoftWare)
router.get('/:id', getSoftWareById)
router.post('/', createSoftWare)
router.put('/:id', updateSoftWareById)
router.delete('/:id', deleteSoftWareById)



module.exports = router