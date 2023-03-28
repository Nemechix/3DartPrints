const router = require('express').Router()

const {
    getAllUsers, createUser, getUserById, deleteUserById, updateUserById
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/', getUserById)
router.put('/', updateUserById)
router.delete('/', deleteUserById)


module.exports = router