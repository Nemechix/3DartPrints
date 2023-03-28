const router = require('express').Router()

const {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
} = require('../controllers/category.controller')

router.get('/', getAllCategories)
router.get('/', getCategoryById)
router.post('/', createCategory)
router.put('/:designId', updateCategoryById)
router.delete('/:designId', deleteCategoryById)

module.exports = router