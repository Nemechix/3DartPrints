const router = require('express').Router()

const {
    getAllUsers, createUser, getUserById, deleteUserById, updateUserById, getUserDesignsById
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/:userid/', getUserById)
router.get('/:userid/designs', getUserDesignsById)
router.post('/', createUser)
router.put('/:userid', updateUserById)
router.delete('/:userid', deleteUserById)


module.exports = router