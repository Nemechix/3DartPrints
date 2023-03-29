const router = require('express').Router()

const {
    getAllUsers, createUser, getUserById, deleteUserById, updateUserById, getUserDesignsById, getUserPrinterMaterials, getUserPrintersById, linkPrinterToUser, uploadDesignByUser, getMyProfile, deleteMyUser, updateMyUser
} = require('../controllers/user.controller')
const { checkAuth, checkAdmin } = require('../middleware/auth')

router.get('/', getAllUsers)
router.get('/me', checkAuth, getMyProfile)
router.delete('/me', checkAuth, deleteMyUser)
//mis diseños put
//mis diseños delete
//mis printers put
//mis printers delete
//mis software put
//mis software delete
//mis software get
//mis software post
router.put('/me', checkAuth, updateMyUser)
router.get('/:id/', getUserById)
router.get('/:id/designs', getUserDesignsById)
router.post('/me/designs', checkAuth, uploadDesignByUser);
router.get('/:id/printers', getUserPrintersById)
router.post('/me/printers/', checkAuth, linkPrinterToUser);
router.get('/:userid/printers/:printerid/materials',checkAuth, getUserPrinterMaterials)
router.post('/',checkAuth, checkAdmin, createUser)
router.put('/:id', checkAuth, checkAdmin, updateUserById)
router.delete('/:id', checkAuth, checkAdmin, deleteUserById)


module.exports = router