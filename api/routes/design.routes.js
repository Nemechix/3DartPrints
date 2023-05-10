const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const {
    getAllDesign, createDesign, updateDesignById, deleteDesignById, getDesignById, getCategoryByDesignId, getRandomDesign
} = require('../controllers/design.controller')
// const { addToFavorites } = require('../controllers/user.controller')

router.get('/', getAllDesign)
router.get('/random', getRandomDesign)
// router.post('/favorites', checkAuth, addToFavorites);
router.get('/:id', getDesignById)
router.get('/:id/category', getCategoryByDesignId)
router.post('/', checkAuth, checkAdmin, createDesign)
router.put('/:id', checkAuth, checkAdmin, updateDesignById)
router.delete('/:id', checkAuth, checkAdmin, deleteDesignById)




module.exports = router