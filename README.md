# ✂️ HairExpert - Salon Booking

![Status](https://img.shields.io/badge/Project-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Tech](https://img.shields.io/badge/Tech-FullStack-blueviolet)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-orange)
![Made with Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-success)

A full-stack salon appointment booking system where users can view services, select stylists, and book appointments. Admins can manage all bookings through a dedicated portal. Built with Node.js, Express, MongoDB, and a responsive frontend.

[Live Demo](https://hair-expert.netlify.app/) • [GitHub Repo](https://github.com/Pratham754/Salon_Booking)

---

## 🎯 Features

- 🧴 **Service Catalog** – Browse services like haircuts or manicures with pricing  
- 📅 **Appointment Booking** – Choose time, date, and stylist with real-time availability check  
- 🧑‍💼 **Admin Dashboard** – View, filter, and cancel appointments  
- ✅ **Confirmation Messages** – Real-time booking feedback

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **Deployment Ready**: Docker & Node  
- **Design**: Fully responsive layout

---

## 🚀 Setup

```bash
git clone https://github.com/Pratham754/Salon_Booking.git
cd Salon_Booking
npm install
node index.js
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 File Structure

```
Salon_Booking/
├── public/            # HTML, CSS, client-side JS
├── models/            # Mongoose schemas
├── routes/            # Express routes
├── index.js           # Entry point
└── package.json
```

---

## ✅ Usage Flow

1. User selects service, stylist, date, and time
2. Form sends data to backend via Express API
3. Server checks for clashes and stores booking in MongoDB
4. Admin portal allows booking management

---

## 🧩 Contributions

Pull requests are welcome! Suggested features:

- 🔐 User Authentication
- 💸 Payment Integration
- 📨 Email Notifications
- 📊 Admin Analytics Dashboard

---

## 📄 License

MIT License © [Pratham Choudhary](https://github.com/Pratham754)

---
