import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true 
    }
},{
    timestamps:true
})

customerSchema.methods.matchPassword = async function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)
}

customerSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


const Customer = mongoose.model('customer',customerSchema)
export default Customer