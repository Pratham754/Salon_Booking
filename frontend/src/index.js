import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import "./assets/style.css";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);