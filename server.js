import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config();

connectDB();

const app = express();

app.use(cors());

// Middleware
// app.use((req, res, next)=>{
//     console.log(req.originalUrl)
//     next()
// })

app.get('/', (req, res)=>{
    res.send('<h1>ecommerce API</h1>')
})

app.use('/api/products', productRoutes)


app.use(notFound)


// error handler 
app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server rinning in ${process.env.NODE_ENV} mode on port ${PORT}`))
