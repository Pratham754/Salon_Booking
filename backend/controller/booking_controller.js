const Booking = require('../model/booking_model');

//the following function will show all the existing bookings in the collection
const getBooking = async (req, res) => {
    await Booking.find().then((documents) => {
        return res.send({
            message: documents
        });
    });
}

//the following function will insert record in the collection
const postBooking = async (req, res) => {
    try {
        const currentDate = new Date();
        const bookingData = new Booking({
            date: req.body.date,
            name: req.body.name,
            content: req.body.content,
            dated: currentDate
        });
        await bookingData.save().then(() => {
            return res.send({
                message: 'Appointment created succesfully',
            })
        });
    }
    catch (error) {
        console.log(error);
    }
}

const searchBooking = async (req, res) => {
    try {
        Booking.findById(req.params.id).then(document => {
            if (document) {
                res.status(200).json(document);
            }
            else {
                res.status(404).json({
                    messages: 'Appointment not found',
                });
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const updateBooking = async (req, res) => {
    try {
        const itemId = req.params.id;
        const { date, name, content } = req.body;

        const updatedItem = await Booking.findByIdAndUpdate(itemId, { date, name, content }, { new: true });
        if (!updatedItem) {
            return res.status(404).send({ error: 'Item not found' });
        } else {
            res.status(201).json({
                message: 'Record updated successfully',
            });
        }

    } catch (error) {
        console.log(error)
    }
}

const deleteBooking = async (req, res) => { 
    try {
        await Booking.deleteOne({ _id: req.params.id }).then(result => {
            if(result) {
                console.log(result);
                res.status(200).json({ message: "Appointment deleted!" });
            } else {
                res.status(200).json({ message: "Cannot be deleted!" });
            }
        });
    }catch(error) {
        console.log(error);
    }
}

module.exports = { getBooking, postBooking, searchBooking, updateBooking, deleteBooking }