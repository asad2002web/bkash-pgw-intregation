const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pyi8sd9.mongodb.net/bKashPayment`;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;