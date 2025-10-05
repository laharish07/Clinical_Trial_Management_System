require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.API_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);

// Health check route
app.get('/', (req, res) => {
    res.send('Clinical Trial API is running...');
});

// Start the server
app.listen(PORT, async () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        await sequelize.sync({ alter: true }); // Use { alter: true } to update schema without dropping data
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});