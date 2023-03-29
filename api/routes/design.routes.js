const router = require('express').Router()
const { checkAuth } = require('../middleware/auth')

const {
    getAllDesign, createDesign, updateDesignById, deleteDesignById, getDesignById
} = require('../controllers/design.controller')

router.get('/', getAllDesign)
router.get('/:id', getDesignById)
router.post('/', checkAuth, createDesign)
router.put('/:id', checkAuth, updateDesignById)
router.delete('/:id', checkAuth, deleteDesignById)





module.exports = router