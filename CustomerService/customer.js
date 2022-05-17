import express from 'express'
import dotenv from 'dotenv'
import DBConnection from './config/database.js'


dotenv.config()

//connect database
DBConnection()

const app = express()
app.use(express.json())

//routes
import customerRoutes from './Routes/customerRoutes.js'


app.get('/', (req,res) => {
    res.send("hello")
})  

app.use('/api/customer', customerRoutes)

//create port
const PORT = 5500 || process.env.PORT
app.listen(PORT,console.log(`server running on ${PORT}`))