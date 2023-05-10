const Design = require('../models/design.models')
const Category = require ('../models/category.models')
const stripe = require('stripe')('sk_test_51N4PBRLq0Q7kbXgYAxRg1hiePFEE5E5QVivcLfo1S3qIfz6prhLArOpy1iaF9ZkZqU2rTqErJjm9GcGwWgWhmpck00nvP7r8Ak')



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

    // Crea el producto en Stripe
    const stripeProduct = await stripe.products.create({
      name: name,
    });

    const stripeProductId = stripeProduct.id;

    const stripePrice = await stripe.prices.create({
      product: stripeProductId,
      unit_amount: price * 100, 
      currency: 'usd',
    });

    const stripePriceId = stripePrice.id;

    const design = await Design.create({
      name,
      description,
      file,
      image,
      price,
      quantity,
      stripeId: stripePriceId,
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