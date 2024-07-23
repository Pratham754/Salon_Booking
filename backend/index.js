// Importing dependencies inside the app
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require('cors');

//port number and credentials for the mongoDB connection
dotenv.config();

//creating a reference to the database.js
const connectToDB = require('./config/database');

//invocation of the database connectivity
const startDB = async () => {
    try {
        await connectToDB();
    }
    catch (error) {
        console.log(error);
    }
}
startDB();

const app = express(); //crerating instance of express package
app.use(bodyParser.json()); //will parse JSON bodies into JavaScript objects 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors()); //will allow  or restrict cross-origin requests b/w different domains in browsers

app.get('/', (req, res) => { //res - response , req - request - from browser(frontend) to node(backend) 
    res.send('welcome to API');
});

const port = 7700;

app.listen(port, () => {
    console.log('server is running');
});

//booking_route setup
const bookingRouteSetup = require('./route/booking_route');
app.use('/myBooking', bookingRouteSetup);