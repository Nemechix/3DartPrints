
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
        next()
    })

}

const checkAdmin = (req, res, next) => {
    next()
}

module.exports = { checkAuth, checkAdmin }