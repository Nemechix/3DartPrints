const Printer = require('../models/printer.models')

async function getAllPrinters(req, res) {
    try {
        const printers = await Printer.findAll()
        return res.status(200).json(printers)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function getPrinterById(req, res) {
    try {
        const printer = await Printer.findByPk(req.params.id)
        if (printer) {
            return res.status(200).json(printer)
        } else {
            return res.status(404).send('Printer not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createPrinter(req, res) {
    try {
        const printer = await Printer.create(req.body)
        return res.status(200).json({ message: 'Printer created', printer: printer })
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function updatePrinterById(req, res) {
    try {
        const [updated] = await Printerr.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updated)
        if (updated) {
            return res.status(200).json({ message: 'Printer updated' })
        } else {
            return res.status(404).send('Printer not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deletePrinterById(req, res) {
    try {
        const printer = await Printer.destroy({
            where: {
                id: req.params.id
            },
        })
        if (printer) {
            return res.status(200).json('Printer Deleted')
        } else {
            return res.status(404).send('Printer not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {getAllPrinters, getPrinterById, createPrinter, updatePrinterById, deletePrinterById }