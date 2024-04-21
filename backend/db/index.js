// backend/db/index.js

const mysql = require('mysql2/promise');
const dotenv = require('Dotenvx');

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
    try {
        // Create a connection pool
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10, // Adjust this based on your database requirements
            queueLimit: 0
        });

        // Test connection
        const connection = await pool.getConnection();
        connection.release(); // Release the connection immediately

        console.log('Connected to the database');
        return pool;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; // Rethrow the error to propagate it
    }
};

module.exports = connectDB;
