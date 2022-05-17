import Customer from '../Model/customerModel.js'
import asyncHandler from 'express-async-handler'



const registerCustomer = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const customerExists = await Customer.findOne({ email })

    if (customerExists) {
        res.status(400)
        throw new Error("user already exists")
    }


    const customer = await Customer.create({
        name,
        email,
        password
    })

    if (customer) {

        res.status(201).json({

            _id: customer._id,

            name: customer.name,

            email: customer.email,

            password: customer.password,

        })

    } else {

        res.status(400)

        throw new Error('Invalid user data')

    }
})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const customer = await Customer.findOne({ email })

    if (customer && (await customer.matchPassword(password))) {
        res.json({
            _id: customer._id,
            name: customer.name,
            email: customer.email,
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }

})


export { registerCustomer, authUser }