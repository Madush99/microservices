import express from 'express'
const router = express.Router()
import { getAllDelivery, insertDelivery } from '../controllers/deliveryController.js'

router.post('/addDelivery', insertDelivery)
router.get('/getAlldeliveries', getAllDelivery)

export default router

