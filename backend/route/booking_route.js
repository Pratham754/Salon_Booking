const express = require("express");
const route = express.Router(); // set up a router instance that can be used to define and handle routes within application.

const bookingController = require('../controller/booking_controller');

//this route is meant for bringing data from mongoDB collection to the frontend
route.get('/booking', bookingController.getBooking);

//this route is meant to save document in the mongoDB collection 
route.post('/booking_add', bookingController.postBooking);

//these /todo and /todo_add goes on links like localhost:7700/myTodo/todo_add

//search
route.get("/booking/:id", bookingController.searchBooking);

//update
route.put("/Booking_edit/:id", bookingController.updateBooking);

// Delete
route.delete("/booking/:id", bookingController.deleteBooking);

module.exports = route;