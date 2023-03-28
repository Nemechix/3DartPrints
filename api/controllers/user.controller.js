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

async function getUserById(req,res) {
    try{
        const user = await User.findByPk(req.params.id)
        if(user){
            return res.status(200).json(user)
        } else { 
            return res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteUserById(req,res){
    try{
        const user = await User.destroy({
            where: {
                id: req.params.id
            },
        })
        if (user) {
            return res.status(200).json('User Deleted')
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

/* async function getDesignByUserId(req,res) {
    try{
        const user = await User.findByPk
    }
} */

module.exports = {getAllUsers, createUser, getUserById, deleteUserById}