import axios from "axios";
import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserInput.css';

const UserInput = () => {

    // State variables
    const today = new Date().toISOString().split('T')[0];
    const initialState = { date: today, name: '', content: '' }
    const [booking, setBooking] = useState(initialState);
    const [msgReceive, setMsgReceive] = useState('');
    const [loading, setLoading] = useState(true);
    const [output, setOutput] = useState([]);

    useEffect(()=>{
        fetchBooking();
    },[]);

    //Fetching appointments from server
    const fetchBooking = async ()=>{
        try{
            const response = await axios.get(`https://salon-booking-backend-8k3e.onrender.com/myBooking/booking`);
            const sortedAppointments = response.data.message.sort((a, b) => new Date(a.date) - new Date(b.date));
            setOutput(sortedAppointments);
            setLoading(false);
        } catch (error){
            console.log(error);
            toast.error("Failed to fetch appointments");
        }
    }

    // handle form changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setBooking({ ...booking, [name]: value });
    }

    // handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!booking.name || !booking.content) {
            toast.error("Title and Content are Required!");
            return;
        }

        try {
            const response = await axios.post(
                "https://salon-booking-backend-8k3e.onrender.com/myBooking/booking_add",
                booking,
                {headers: { "Content-Type": "application/json" }}
            );

            setMsgReceive(response.data);
            console.log(response.data);
            setBooking(initialState);
            fetchBooking();

        } catch (error) {
            console.log(error);
            toast.error("Failed to add appointment");
        }
    }

    const DeleteBooking = async (itemId) => {
        try {
            const response = await axios.delete(`https://salon-booking-backend-8k3e.onrender.com/myBooking/booking/${itemId}`);
            toast.success("Appointment deleted successfully!");
            fetchBooking();
            console.log(response.data);
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete Appointment");
        }
    };
    
    return (
        <div className="appointmentbox">
            <div className="first">
                <h2>
                    Schedule Appointment
                </h2>
                <form onSubmit={handleSubmit}>
                    Enter Date
                    <input type="date" name="date" placeholder="Enter Date" min={booking.date} onChange={handleChange} /><br />
                    Enter Name
                    <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} /><br />
                    Enter Service
                    <input type="text" name="content" placeholder="Enter Service" onChange={handleChange} /><br /><br />
                    <button type="submit">Submit</button>
                </form>

                {msgReceive && (
                    <div style={{ color: "white", marginTop: "10px" }}>
                        {msgReceive.message}
                    </div>
                )}
            </div>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p>Loading data...</p>
                </div>
            ) : (
                <div className="second">
                    <h1>
                        YOUR APPOINTMENTS
                    </h1>
                    <div className="container">
                        {Array.isArray(output) && output.map((item, index) => (
                            <div className="booking-item" key={index}>
                                <details>
                                    <summary>
                                        <div className="booking-controls" >
                                            <FontAwesomeIcon icon={faBars} style={{ backgroundColor: 'transparent', color: "white" }} />
                                        </div>
                                    </summary>
                                    <ul>
                                        <li>
                                            <Link to={`/${item._id}`} className="link-icon">
                                                <FontAwesomeIcon icon={faPencil} style={{ backgroundColor: 'transparent' }} />
                                                Edit
                                            </Link>
                                        </li>
                                        <li onClick={() => DeleteBooking(item._id)}>
                                            <FontAwesomeIcon icon={faTrash} style={{ backgroundColor: 'transparent' }} />
                                            Close
                                        </li>
                                    </ul>
                                </details>
                                
                                <div className="booking-date">{format(new Date(item.date), 'dd-MM-yyyy')}</div>
                                <div className="booking-content">{item.content}</div>
                                <div className="booking-name">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserInput;