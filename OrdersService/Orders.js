import express from 'express'
import dotenv from 'dotenv'
import connectDB from './Config/db.js'


import OrderRoutes from './Routes/OrderRoutes.js'

dotenv.config()

//connect DB
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/orders', OrderRoutes)

//create port
const PORT = process.env.PORT || 6501

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} port ${PORT}`
  )
)