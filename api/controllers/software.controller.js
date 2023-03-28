const Software = require('../models/software.models')

async function getAllSoftWare(req, res) {
    try {
        const softwares = await Software.findAll()
        return res.status(200).json(softwares)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function getSoftWareById(req, res) {
    try {
        const software = await Software.findByPk(req.params.id)
        if (software) {
            return res.status(200).json(software)
        } else {
            return res.status(404).send('Software not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createSoftWare(req, res) {
    try {
        const software = await Software.create(req.body)
        return res.status(200).json({ message: 'Software created', software: software })
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function updateSoftWareById(req, res) {
    try {
        const [updated] = await Software.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'Software updated' })
        } else {
            return res.status(404).send('Software not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteSoftWareById(req, res) {
    try {
        const software = await Software.destroy({
            where: {
                id: req.params.id
            },
        })
        if (software) {
            return res.status(200).json('Sofware Deleted')
        } else {
            return res.status(404).send('Software not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = { getAllSoftWare, getSoftWareById, createSoftWare, updateSoftWareById, deleteSoftWareById }