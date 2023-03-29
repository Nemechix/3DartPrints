const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware/auth')

const {
    getAllDesign, createDesign, updateDesignById, deleteDesignById, getDesignById
} = require('../controllers/design.controller')

router.get('/', getAllDesign)
router.get('/:id', getDesignById)
router.post('/', checkAuth, checkAdmin, createDesign)
router.put('/:id', checkAuth, checkAdmin, updateDesignById)
router.delete('/:id', checkAuth, checkAdmin, deleteDesignById)





module.exports = router