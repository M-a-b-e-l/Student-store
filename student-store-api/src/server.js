const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
const morgan = require("morgan");


//import the modelroutes
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderItemRoutes = require('./routes/orderItemRoutes');

//middleware
app.use(express.json()); //Allows for the use of JSON data
app.use(cors()); //enable cors middleware to handle cross-origin requests
app.use(morgan("dev"));


app.get('/', (req, res) => {
    res.send('Hello from the backend!');
})

//use the product routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/orderItems', orderItemRoutes);

app.listen(3000, () => {
    console.log(`Server running on port http://localhost:${port}`)
})


