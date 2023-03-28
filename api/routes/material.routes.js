const router = require('express').Router()

const {
    getAllMaterial, getMaterialById, createMaterial, updateMaterialById, deleteMaterialById
} = require('../controllers/material.controller')



router.get('/', getAllMaterial)
router.get('/:materialId', getMaterialById)
router.post('/', createMaterial)
router.put('/:materialId', updateMaterialById)
router.delete('/:materialId', deleteMaterialById)

module.exports = router