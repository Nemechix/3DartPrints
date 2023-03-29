const router = require('express').Router()

const {
    getAllMaterial, getMaterialById, createMaterial, updateMaterialById, deleteMaterialById
} = require('../controllers/material.controller')
const { checkAuth, checkAdmin } = require('../middleware/auth')



router.get('/', getAllMaterial)
router.get('/:id', getMaterialById)
router.post('/', checkAuth, checkAdmin, createMaterial)
router.put('/:id', checkAuth, checkAdmin, updateMaterialById)
router.delete('/:id', checkAuth, checkAdmin, deleteMaterialById)

module.exports = router