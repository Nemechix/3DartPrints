const router = require('express').Router()

const {
    getAllUsers, createUser, getUserById, deleteUserById, updateUserById, getUserDesignsById, getUserPrinterMaterials, getUserPrintersById
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/:userId/', getUserById)
router.get('/:userId/designs', getUserDesignsById)
router.get('/:userId/printers', getUserPrintersById)
router.get('/:userId/printers/:printerId/materials', getUserPrinterMaterials)
router.post('/', createUser)
router.put('/:userId', updateUserById)
router.delete('/:userId', deleteUserById)


module.exports = router