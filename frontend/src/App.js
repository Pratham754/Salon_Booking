import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from "./components/About";
import Home from "./components/Home";
import UserInput from './components/UserInput';
import SingleBooking from './components/SingleBooking';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Routing Implementation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/input' element={<UserInput />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/:id' element={<SingleBooking />} />
        <Route path="*" element={
          <h1 style={{ textAlign: "center" }}>404: Page Not Found</h1>
        } />
      </Routes>

      <ToastContainer position='top-center' autoClose='1500' />
    </BrowserRouter>
  );
}

export default App;