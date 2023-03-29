
const jwt = require('jsonwebtoken')
const User = require('../models/user.models')

const checkAuth = (req, res, next) => {
    const token = req.headers.token

    jwt.verify(token, process.env.SECRET, async (err, payload) => {
        if (err) {
            return res.status(400).send('ERROR: invalid token')
        }

        const user = await User.findOne({ where: { email: payload.email }})
        if (!user) {
            return res.status(400).send('invalid token')
        }
        req.user = user
        next()
    })
}

const checkAdmin = (req, res, next) => {
    const user = req.user
    if (user.role !== 'admin') {
       return res.status(400).send('Unauthorized')
    }
    next()
}

module.exports = {checkAuth, checkAdmin}