const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
} = require('../controllers/category.controller')

router.get('/', getAllCategories)
router.get('/:id', getCategoryById)
router.post('/', checkAuth, checkAdmin, createCategory)
router.put('/:id', checkAuth, checkAdmin, updateCategoryById)
router.delete('/:id', checkAuth, checkAdmin, deleteCategoryById)

module.exports = router