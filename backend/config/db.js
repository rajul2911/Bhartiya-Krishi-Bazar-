import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://AdityaPratap:qoYeY20Bkg1E45rK@cluster0.p5yi9c8.mongodb.net/BKB', {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            })
            console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB;