const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const ticketRoutes = require('./routes/ticketRoutes');

// dotenv.config();

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to Database
connectDB();

// Use Routes
app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
