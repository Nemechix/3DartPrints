const router = require('express').Router()

const {
    getAllUsers, createUser, getUserById, deleteUserById, updateUserById, getUserDesignsById, getUserPrinterMaterials, getUserPrintersById, linkPrinterToUser, uploadDesignByUser, getMyProfile, deleteMyUser, updateMyUser
} = require('../controllers/user.controller')
const { checkAuth, checkAdmin } = require('../middleware/auth')

router.get('/', getAllUsers)
router.get('/me', checkAuth, getMyProfile)
router.delete('/me', checkAuth, deleteMyUser)
router.put('/me', checkAuth, updateMyUser)
router.get('/:id/', getUserById)
router.get('/:id/designs', getUserDesignsById)
router.post('/:id/designs', checkAuth, uploadDesignByUser);
router.get('/:id/printers', getUserPrintersById)
router.post('/:id/printers/:id', checkAuth, linkPrinterToUser);
router.get('/:userid/printers/:printerid/materials',checkAuth, getUserPrinterMaterials)
router.post('/',checkAuth, checkAdmin, createUser)
router.put('/:id', checkAuth, checkAdmin, updateUserById)
router.delete('/:id', checkAuth, checkAdmin, deleteUserById)


module.exports = router