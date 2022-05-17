import mongoose from 'mongoose'

const deliverySchema = mongoose.Schema({
      // deliveryId: {
      //       type: String,
      //       required: true
      // },
      customerName: {
            type: String,
            required: true
      },
      productName: {
            type: String,
            required: true
      },
      deliveryAddress: {
            type: String,
            required: true,
      },
      deliveryCharges: {
            type: String,
            required: true,
      }

}, {
      timestamps: true
})

const Delivery = mongoose.model('delivery', deliverySchema)

export default Delivery