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
router.put('/:id', updateCategoryById)
router.delete('/:id', deleteCategoryById)

module.exports = router