const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connection to MongoDB {${conn.connection.host}} successfull.`);
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;