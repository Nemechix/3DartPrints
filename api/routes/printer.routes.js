const router = require('express').Router()

const { getAllPrinters, getPrinterById, createPrinter, updatePrinterById, deletePrinterById } = require('../controllers/printer.controller')


router.get('/', getAllPrinters)
router.get('/:id', getPrinterById)
router.post('/', createPrinter)
router.put('/:id', updatePrinterById)
router.delete('/:id', deletePrinterById)




module.exports = router