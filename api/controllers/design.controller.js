const Design = require('../models/design.models')
const Category = require ('../models/category.models')


async function getAllDesign(req, res) {
    try {
        const designs = await Design.findAll()
        return res.status(200).json(designs)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function getRandomDesign(req, res) {
    try {
        const random = await Design.random()
        return res.status(200).json(random)
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

const createDesign = async (req, res) => {
  try {
    const { name, description, file, image, price, quantity, categoryName } = req.body;

    // Crea el diseño
    const design = await Design.create({
      name,
      description,
      file,
      image,
      price,
      quantity,
      userId: req.user.id,
    });

    const categories = await Category.findAll({
      where: {
        name: categoryName,
      },
    });
    await design.addCategories(categories);

    const createdDesign = await Design.findByPk(design.id, { include: Category });

    return res.status(200).json({ message: 'Design created', design: createdDesign });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};




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

async function getCategoryByDesignId(req, res) {
    try {
        const design = await Design.findOne({ where: { id: req.params.id } })

        const category = await design.getCategories();

        if (category.length) {
            return res.status(200).json(category);
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}



module.exports = { getAllDesign,getRandomDesign, getDesignById, createDesign, updateDesignById, deleteDesignById, getCategoryByDesignId }