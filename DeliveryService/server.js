import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import path from 'path'
import cors from 'cors'
import morgan from 'morgan'
import colors from 'colors'


import deliveryRoutes from './routes/deliveryRoutes.js'


dotenv.config()

//connect database
connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())


app.use('/api/delivery', deliveryRoutes)

app.get('/', (req, res) => {
    res.send('API is running...')
})

//create port
const PORT = process.env.PORT || 6500

app.listen(
    PORT,
    console.log(
        `server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold
    )
)