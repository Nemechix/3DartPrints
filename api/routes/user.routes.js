const router = require('express').Router()

const {
    getAllUsers, createUser, getUserById, deleteUserById, updateUserById, getUserDesignsById, getUserPrinterMaterials
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/:userid/', getUserById)
router.get('/:userid/designs', getUserDesignsById)
router.get('/:userId/printer/:printerId/materials', getUserPrinterMaterials)
router.post('/', createUser)
router.put('/:userid', updateUserById)
router.delete('/:userid', deleteUserById)


module.exports = router