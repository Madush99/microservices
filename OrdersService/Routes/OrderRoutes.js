import express from 'express'
const router = express.Router()
import { addOrder, getAllOrder } from '../Controllers/OrderController.js'


router.post('/addOrder', addOrder)
router.get('/getAllOrder', getAllOrder)

export default router
