const mongoose = require('mongoose');

/**
 * Initialize MongoDB connection
 * @returns {Promise<void>}
 */
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); // Exit with failure
    }
};

/**
 * Close MongoDB connection
 * @returns {Promise<void>}
 */
const closeDB = async () => {
    try {
        await mongoose.connection.close();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Failed to disconnect from MongoDB', error);
        process.exit(1); // Exit with failure
    }
};

module.exports = { connectDB, closeDB };
