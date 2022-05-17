import mongoose from "mongoose";

const DBConnection = async () => {
    //database connection
    try {
          const conn = await mongoose.connect(process.env.MONGO_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
          })
          //database connected alert
          console.log(`Database Connected: ${conn.connection.host}`)
    } catch (error) {
          console.error(`Error: ${error.message}`) //database not connected message
          process.exit(1)
    }
}


export default DBConnection  //exporting database