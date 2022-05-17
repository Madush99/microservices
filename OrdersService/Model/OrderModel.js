import mongoose from 'mongoose'

const orderShema = mongoose.Schema({
    CustomerID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ProductID: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },
    initialDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    }
},{
    timestamps: true
})

const Order = mongoose.model('Order', orderShema)
export default Order