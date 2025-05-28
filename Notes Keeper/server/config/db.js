import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI)
       console.log(`DB Connected ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
    }
}

export default connectDB;