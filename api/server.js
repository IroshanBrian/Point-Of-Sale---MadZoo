const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);
app.use(cors({
     origin: 'http://localhost:5173',
     methods: 'GET,POST,PUT,DELETE',
     allowedHeaders: 'Content-Type,Authorization'
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
