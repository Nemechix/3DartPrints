const router = require('express').Router()

const { getAllPrinters, getPrinterById, createPrinter, updatePrinterById, deletePrinterById } = require('../controllers/printer.controller')


router.get('/', getAllPrinters)
router.get('/:printerId', getPrinterById)
router.post('/', createPrinter)
router.put('/:printerId', updatePrinterById)
router.delete('/:printerId', deletePrinterById)




module.exports = router