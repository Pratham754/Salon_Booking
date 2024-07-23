const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
};

const bookingSchema = new Schema({
    date: { type: Date, required: true , default: getTodayDate},
    name: { type: String, required: true },
    content: { type: String, required: true },
    dated: { type: Date, default: Date.now }
});

const bookingModel = mongoose.model('Booking', bookingSchema);

module.exports = bookingModel;