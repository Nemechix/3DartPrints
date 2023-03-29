const router = require('express').Router()

const { getAllPrinters, getPrinterById, createPrinter, updatePrinterById, deletePrinterById } = require('../controllers/printer.controller')
const {checkAuth, checkAdmin } = require('../middleware/auth')


router.get('/', getAllPrinters)
router.get('/:id', getPrinterById)
router.post('/', createPrinter)
router.put('/:id',checkAuth, checkAdmin, updatePrinterById)
router.delete('/:id', deletePrinterById)




module.exports = router