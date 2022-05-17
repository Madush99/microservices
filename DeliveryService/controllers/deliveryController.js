import asyncHandler from 'express-async-handler'
import Delivery from '../models/delivery.js'

const insertDelivery = asyncHandler(async (req, res) => {

    const { customerName, productName, deliveryAddress, deliveryCharges  } = req.body


    const newdelivery = new Delivery({
        customerName, productName, deliveryAddress, deliveryCharges
    })
    
    try {
          await newdelivery.save()
          res.send('New delivery room Added Successfully')
    } catch (error) {
          return res.status(400).json({ error });
    }
})

const getAllDelivery = asyncHandler(async (req, res) => {

    const delivery = await Delivery.find({})

    res.json(delivery)

})

export { insertDelivery, getAllDelivery }