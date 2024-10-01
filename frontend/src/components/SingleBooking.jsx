import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function SingleBooking() {

    const navigate = useNavigate();
    const today = new Date().toISOString().split('T')[0];
    const bookingReceive = { date: today, name: '', content: '' };
    const [booking, setBooking] = useState(bookingReceive);
    const [update_booking, setUpdateBooking] = useState(bookingReceive);
    const [msgReceive, setMsgReceive] = useState();

    // Step 1: To collect the ID from the URL, i.e. Param
    const { id } = useParams();
    // console.log(id);

    // Step 2: To perform Search based on the ID
    useEffect(() => {
        axios.get(`https://salon-booking-nd96.onrender.com/myBooking/booking/${id}`)
            .then((response) => {
                // console.log(response.data);
                setBooking(response.data);
            });
    }, [id]);

    // console.log(booking);

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!update_booking.name || !update_booking.content) {
            toast.error("Title and Content are Required!");
            return;
        }

        try {
            const response = await axios.put(`https://salon-booking-nd96.onrender.com/myBooking/booking_edit/${id}`, update_booking);
            setMsgReceive(response.data);
            toast.success('Appointment updated successfully!', {
                onClose: () => {
                    navigate('/input');
                }
            }
            );
            console.log(response);
        } catch (error) {
            console.log(error);
            toast.error('Failed to update Appointment.')
        }
    }

    const handleChange = (event) => {

        const { name, value } = event.target;

        setUpdateBooking({ ...update_booking, [name]: value });


    }

    return (
        <div className="AppStyle" >
            <h2 style={{ textAlign: "center", color: "white", fontFamily: "montserrat thin", textShadow: "0 0 10px #00c3ff, 0 0 20px #00c3ff" }}>
                Update Your Appointment
            </h2>
            <form onSubmit={handleSubmit} style={{ borderRadius: "15px", display: 'flex', flexDirection: 'column', background: "rgba(10, 10, 10, 0.7)", padding: "15px", margin: "15px 25%" }}>

                <div style={{ display: 'flex', marginBottom: '1rem' }}>
                    <label htmlFor="date" className="col-sm-2 col-form-label" style={{ color: "aliceblue" }} >Date</label>
                    <input type="date" className="form-control" value={update_booking.date} placeholder={booking.date} min={today} name="date" onChange={handleChange} style={{ marginLeft: '0.5rem' }} />
                </div>

                <div style={{ display: 'flex', marginBottom: '1rem' }}>
                    <label htmlFor="name" className="col-sm-2 col-form-label" style={{ color: "aliceblue" }} >Name</label>
                    <input type="text" className="form-control" placeholder={booking.name} name="name" onChange={handleChange} style={{ marginLeft: '0.5rem' }} />
                </div>

                <div style={{ display: 'flex', marginBottom: '1rem' }}>
                    <label htmlFor="content" className="col-sm-2 col-form-label" style={{ color: "aliceblue" }} >Content</label>
                    <input type="text" className="form-control" placeholder={booking.content} name="content" onChange={handleChange} style={{ marginLeft: '0.5rem' }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: 'fit-content', alignSelf: 'center' }}>Update</button>

            </form>

            {msgReceive && (
                <div style={{ color: "white", marginTop: "10px", textAlign: "center" }}>
                    {msgReceive.message}
                </div>
            )}

        </div>
    )
}

export default SingleBooking