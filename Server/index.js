const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/status', (req, res) => {
    res.json({ status: 'Server is running', message: 'Welcome to St.Devasahayam Martyrdom Place API' });
});

// Form submission endpoints
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact Form Submission:', { name, email, message });
    res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.post('/api/prayer-request', (req, res) => {
    const { name, request } = req.body;
    console.log('Prayer Request:', { name, request });
    res.status(200).json({ success: true, message: 'Prayer request submitted. We will keep you in our prayers.' });
});

app.post('/api/mass-booking', (req, res) => {
    const { name, date, intention } = req.body;
    console.log('Mass Booking:', { name, date, intention });
    res.status(200).json({ success: true, message: 'Mass booking request received.' });
});

app.post('/api/donation', (req, res) => {
    const { name, amount } = req.body;
    console.log('Donation Intent:', { name, amount });
    res.status(200).json({ success: true, message: 'Thank you for your generous support!' });
});

app.post('/api/accommodation', (req, res) => {
    const { name, roomType, dates } = req.body;
    console.log('Accommodation Enquiry:', { name, roomType, dates });
    res.status(200).json({ success: true, message: 'Accommodation enquiry received. We will contact you soon.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
