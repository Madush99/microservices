import asyncHandler from 'express-async-handler'
import Order from '../Model/OrderModel.js'


const addOrder = asyncHandler(async(req, res) => {
   const {
        CustomerID,
        ProductID,
        initialDate,
        deliveryDate,
   } = req.body

   const order = new Order({
       CustomerID,
       ProductID,
       initialDate,
       deliveryDate,
   })

   const createOrder = await order.save()
   res.status(201).json(createOrder)
})

const getAllOrder = asyncHandler(async(req, res) => {
    const orders = await Order.find({})
    res.json(orders)
}) 

export { addOrder, getAllOrder }