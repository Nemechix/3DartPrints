const Design = require('../models/design.models')


async function getAllDesign(req, res) {
    try {
        const designs = await Design.findAll()
        return res.status(200).json(designs)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function getDesignById(req, res) {
    try {
        const design = await Design.findByPk(req.params.id)
        if (design) {
            return res.status(200).json(design)
        } else {
            return res.status(404).send('Design not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createDesign(req, res) {
    try {
        const design = await Design.create(req.body)
        return res.status(200).json({ message: 'Design created', design: design })
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function updateDesignById(req, res) {
    try {
        const [updated] = await Design.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'Design updated' })
        } else {
            return res.status(404).send('Design not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteDesignById(req, res) {
    try {
        const design = await Design.destroy({
            where: {
                id: req.params.id
            },
        })
        if (design) {
            return res.status(200).json('Design Deleted')
        } else {
            return res.status(404).send('Design not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = { getAllDesign, getDesignById, createDesign, updateDesignById, deleteDesignById }