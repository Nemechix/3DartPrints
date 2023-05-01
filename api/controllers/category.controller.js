const Category = require('../models/category.models')
const Design = require('../models/design.models');
const DesignCategory = require('../models/design_category.models');


async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll()
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function getRandomCategory(req, res) {
    try {
        const random = await Category.random()
        return res.status(200).json(random)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function getCategoryById(req, res) {
    try {
        const category = await Category.findOne({ where: {id: req.params.id} })
        return res.status(200).json(category)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function createCategory(req, res) {
    try {
        const category = await Category.create(req.body)
        return res.status(200).json({ message: 'Category created', category: category })
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function updateCategoryById(req, res) {
    try {
        const [updated] = await Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'Category updated' })
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteCategoryById(req, res) {
    try {
        const category = await Category.destroy({
            where: {
                id: req.params.id
            },
        })
        if (category) {
            return res.status(200).json('Category Deleted')
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


async function getDesignsByCategoryId(req, res) {
    try {
        const category = await Category.findOne({ where: { id: req.params.id } })

        const desings = await category.getDesigns();

        if (desings.length) {
            return res.status(200).json(desings);
        } else {
            return res.status(404).send('Category not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getDesignsByCategoryName(req, res) {
    try {
        const category = await Category.findOne({ where: { name: req.params.name } })

        const desings = await category.getDesigns();

        if (desings.length) {
            return res.status(200).json(desings);
        } else {
            return res.status(404).send('Category not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}



module.exports = { getAllCategories, getCategoryById, createCategory, updateCategoryById, deleteCategoryById, getDesignsByCategoryId,getRandomCategory, getDesignsByCategoryName }