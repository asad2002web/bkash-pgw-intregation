const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const connectDB = require('./db/connectDB');
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api', require('./router/test.router'));

app.get('/', (req, res)=>{
     res.send({
         message: "Server is up and running bKash payment"
     });
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    connectDB();
})