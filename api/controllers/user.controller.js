const User = require('../models/user.models')
const Design = require('../models/design.models')
const Printer = require('../models/printer.models')

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

async function getUserById(req, res) {
    try {
        const user = await User.findByPk(req.params.id)
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteUserById(req, res) {
    try {
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

async function updateUserById(req, res) {
    try {
        const [updated] = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'User updated' })
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getUserDesignsById(req, res) {
    try {
        const user = await User.findByPk(req.params.id, {
            include: {
                model: Design,
                as: 'designs'
            }
        });
        if (user) {
            return res.status(200).json(user.designs);
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getUserPrintersById(req, res) {
    try {
        const user = await User.findByPk(req.params.id, {
            include: {
                model: Printer,
                as: 'printers'
            }
        });
        if (user) {
            return res.status(200).json(user.printers);
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getUserPrinterMaterials(req, res) {
    try {
        const user = await User.findByPk(req.params.userId, {
            include: {
                model: Printer,
                as: 'printers',
                where: { id: req.params.printerId },
                include: {
                    model: Material,
                    as: 'materials'
                }
            }
        });
        if (user) {
            return res.status(200).json(user.printers[0].materials);
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function linkPrinterToUser(req, res) {
    try {
        const { printerId, userId } = req.body;
        const printer = await Printer.findByPk(printerId);
        const user = await User.findByPk(userId);

        if (!printer || !user) {
            return res.status(404).send('Printer or user not found');
        }

        await user.addPrinter(printer);

        return res.status(201).send('Printer linked to user successfully');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = { getAllUsers, createUser, getUserById, deleteUserById, updateUserById, getUserDesignsById, getUserPrintersById, getUserPrinterMaterials, linkPrinterToUser }