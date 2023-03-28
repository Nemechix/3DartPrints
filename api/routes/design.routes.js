const router = require('express').Router()

const {
    getAllDesign, createDesign, updateDesignById, deleteDesignById, getDesignById
} = require('../controllers/design.controller')

router.get('/', getAllDesign)
router.get('/:designId', getDesignById)
router.post('/', createDesign)
router.put('/:designId', updateDesignById)
router.delete('/:designId', deleteDesignById)





module.exports = router