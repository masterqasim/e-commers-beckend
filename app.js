const express = require('express');
const app = express();
require('dotenv/config')
const bodyParsor = require('body-parser')
const morgan = require('morgan');
const mongoose = require('mongoose')
const api = process.env.API_PATH

const { Product } = require('./models/product');
const { Category } = require('./models/category');

const productRouter = require('./routers/products');
const categoryRouter = require('./routers/categories');

// middleware
app.use(bodyParsor.json());
app.use(morgan('tiny'));


// Routers
app.use(`${api}/products`,productRouter);
app.use(`${api}/category`,categoryRouter);

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('database is connected succesfully')
})
.catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000 xyd40aI0z1iMU6gX')
})
