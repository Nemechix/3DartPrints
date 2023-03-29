const { Op } = require("sequelize")
const User = require('../models/user.models')
const Design = require('../models/design.models')
const Printer = require('../models/printer.models')
const Material = require('../models/material.models')
const UserPrinter = require('../models/userprinter.models')

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

/* async function getUserPrinterMaterials(req, res) {
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
} */

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

async function uploadDesignByUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).send('User not found');
        }
        const design = await Design.create({
            name: req.body.name,
            description: req.body.description,
            file: req.body.file,
            image: req.body.image
        });
        await user.addDesign(design);

        return res.status(201).send('Design created');
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

async function getMyProfile(req, res) {
    try {
        const user = req.user;
        console.log(user)
        if (user) {
            return res.status(200).json({ user });
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}


async function deleteMyUser(req, res) {
    try {
        const user = req.user;
        await user.destroy();
        return res.status(200).send("Profile deleted");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function updateMyUser(req, res) {
    const user = req.user; 
    const { param_to_update, value } = req.body;
    console.log(user)
    console.log(value)

    try {
        if (!user) {
            return res.status(404).send('User not found');
        }
        user[param_to_update] = value;
        await user.save();

        return res.send('User updated');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getUserPrinterMaterials(req, res) {
    try {
        const user = await User.findByPk(req.params.userid, {
            //include: UserPrinter
            
                // where: {
                //     id: req.params.printerid
                // },
                // include: {
                //     model: Material,
                //     as: 'materials'
                // }
            })
            const printers = await user.getPrinters()
            const result = await myFunction(printers, user)
           

            // include: [{
            //     model: UserPrinter,
            //     as: 'printers',
            //     // where: {
            //     //     id: req.params.printerid
            //     // },
            //     include: {
            //         model: Material,
            //         as: 'materials'
            //     } 
            // }]
        
        if (user) {
           // return res.status(200).json(user.printers[0].materials);
           res.status(200).send(result)
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function myFunction(printers, user) {
    const result = await Promise.all(printers.map(async (printer) => {
        const userPrinter = await UserPrinter.findOne({ where: { [Op.and]: [{ userId: user.id }, { printerId: printer.id }] } })
        // console.log(userPrinter)
        const materials = await userPrinter.getMaterials()
        // console.log(materials)
        const info = { printerInfo: printer, materials: materials }

        return info
    }))

    return result
}



module.exports = { getAllUsers, createUser, getUserById, deleteUserById, updateUserById, getUserDesignsById, getUserPrintersById, getUserPrinterMaterials, linkPrinterToUser, uploadDesignByUser, getMyProfile, deleteMyUser, updateMyUser, getUserPrinterMaterials }