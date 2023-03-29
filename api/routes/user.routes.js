const router = require('express').Router()

const {
    getAllUsers,
    createUser,
    getUserById,
    deleteUserById,
    updateUserById,
    getUserDesignsById,
    getUserPrinterMaterials,
    getUserPrintersById,
    linkPrinterToUser,
    uploadDesignByUser,
    getMyProfile,
    deleteMyUser,
    updateMyUser,
    deleteDesignByUser,
    updateDesignByUser,
    unlinkPrinterToUser,
    updatePrinterFromUser
} = require('../controllers/user.controller')
const { checkAuth, checkAdmin } = require('../middleware/auth')

router.get('/', getAllUsers)
router.get('/me', checkAuth, getMyProfile)
router.delete('/me', checkAuth, deleteMyUser)
//mis diseños put ++
//mis diseños delete ++
//mis printers put ++
//mis printers delete ++
//mis software put x
//mis software delete x
//mis software get x
//mis software post x
router.put('/me', checkAuth, updateMyUser)
router.get('/:id/', getUserById)
router.get('/:id/designs', getUserDesignsById)
router.post('/me/designs', checkAuth, uploadDesignByUser)
router.put('/me/designs/:id', checkAuth, updateDesignByUser)
router.delete('/me/designs/:id', checkAuth, deleteDesignByUser)
router.get('/:id/printers', getUserPrintersById)
router.post('/me/printers', checkAuth, linkPrinterToUser)
router.put('/me/printers/:id', checkAuth, updatePrinterFromUser)
router.delete('/me/printers/:id', checkAuth, unlinkPrinterToUser)
router.get('/:userid/printers/:printerid/materials', checkAuth, getUserPrinterMaterials)
router.post('/', checkAuth, checkAdmin, createUser)
router.put('/:id', checkAuth, checkAdmin, updateUserById)
router.delete('/:id', checkAuth, checkAdmin, deleteUserById)


module.exports = router