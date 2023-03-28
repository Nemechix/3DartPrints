const router = require('express').Router()

const {
    getAllMaterial, getMaterialById, createMaterial, updateMaterialById, deleteMaterialById
} = require('../controllers/material.controller')



router.get('/', getAllMaterial)
router.get('/:id', getMaterialById)
router.post('/', createMaterial)
router.put('/:id', updateMaterialById)
router.delete('/:id', deleteMaterialById)

module.exports = router