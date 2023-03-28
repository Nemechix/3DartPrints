const Material = require('../models/material.models')



// GET	./material
async function getAllMaterial(req, res) {
    try {
        const material = await Material.findAll()
        return res.status(200).json(material)
    } catch (error) {
        return res.status(500).json(error)
    }
}

// GET	./material/:materialId
async function getMaterialById(req, res) {
    try {
        const material = await Material.findByPk(req.params.id)
        if (material) {
            return res.status(200).json(material)
        } else {
            return res.status(404).send('Material not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// POST	./material
async function createMaterial(req, res) {
    try {
        const material = await Material.create(req.body)
        return res.status(200).json({ message: 'Material created', material: material })
    } catch (error) {
        return res.status(500).json(error)
    }
}

// PUT	./material
async function updateMaterialById(req, res) {
    try {
        const [updated] = await Material.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'Material updated' })
        } else {
            return res.status(404).send('Material not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// DELETE  ./material
async function deleteMaterialById(req, res) {
    try {
        const material = await Material.destroy({
            where: {
                id: req.params.id
            },
        })
        if (material) {
            return res.status(200).json('Material Deleted')
        } else {
            return res.status(404).send('Material not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = { getAllMaterial, getMaterialById, createMaterial, updateMaterialById, deleteMaterialById }