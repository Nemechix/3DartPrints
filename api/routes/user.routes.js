const router = require('express').Router()

const {
    getAllUsers, createUser, getUserById, deleteUserById, updateUserById, getUserDesignsById, getUserPrinterMaterials, getUserPrintersById, linkPrinterToUser, uploadDesignByUser, getMyProfile, deleteMyUser, updateMyUser
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/me', getMyProfile)
router.get('/me', deleteMyUser)
router.get('/me', updateMyUser)
router.get('/:id/', getUserById)
router.get('/:id/designs', getUserDesignsById)
router.post('/:id/designs', uploadDesignByUser);
router.get('/:id/printers', getUserPrintersById)
router.post('/:id/printers/:id', linkPrinterToUser);
router.get('/:userid/printers/:printerid/materials', getUserPrinterMaterials)
router.post('/', createUser)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)


module.exports = router