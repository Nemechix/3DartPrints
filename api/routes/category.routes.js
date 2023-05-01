const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById,
   // getDesignsByCategoryId,
    getRandomCategory,
    getDesignsByCategoryName
} = require('../controllers/category.controller')

router.get('/', getAllCategories)
router.get('/random', getRandomCategory)
//router.get('/:id/designs', getDesignsByCategoryId)
router.get('/:name/designs', getDesignsByCategoryName)
router.get('/:id', getCategoryById)
router.post('/', checkAuth, checkAdmin, createCategory)
router.put('/:id', checkAuth, checkAdmin, updateCategoryById)
router.delete('/:id', checkAuth, checkAdmin, deleteCategoryById)

module.exports = router