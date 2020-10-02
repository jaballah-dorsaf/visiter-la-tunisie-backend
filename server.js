const express = require ('express')
const app = express()
const cors = require('cors');
const mongoose  = require('mongoose');
const userRoute = require('./server/routes/user')
const hotelRoute = require('./server/routes/hotel')
app.use(cors());
app.use(express.json());
app.use('/user', userRoute)
app.use('/hotel',hotelRoute)
require("dotenv").config();

const uri = process.env.MONGO_URI
mongoose.connect(uri , { useNewUrlParser: true ,useCreateIndex:true, useUnifiedTopology:true});
const connection = mongoose.connection;

connection.once('open' , () => {
    console.log('MongoDB database connection established suuccesfully');
});



const PORT = process.env.PORT || 8001

app.listen(PORT , (err)=> err?console.error(err): console.log(' Your server is running on port 8000 '))

