const router = require('express').Router()

const {
    getAllDesign, createDesign, updateDesignById, deleteDesignById, getDesignById
} = require('../controllers/design.controller')

router.get('/', getAllDesign)
router.get('/:id', getDesignById)
router.post('/', createDesign)
router.put('/:id', updateDesignById)
router.delete('/:id', deleteDesignById)





module.exports = router