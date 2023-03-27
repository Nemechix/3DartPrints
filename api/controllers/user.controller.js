const User = require('../models/user.models')

async function getAllUsers(req, res) {
    try {
        const users = await User.findAll()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function createUser(req, res) {
    try {
        const user = await User.create(req.body)
        return res.status(200).json({ message: 'User created', user: user })
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllUsers, createUser}