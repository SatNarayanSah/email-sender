// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const KTMClgEmailTemplate = require('./email-templates/ktm-clg-template');
const ReplyToDevendraEmailTemplate = require('./email-templates/ReplyToDevandraEmail');

require('dotenv').config();

const app = express();
app.use(express.json());

// Configure the transporter for Zoho
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.USER, // Replace with your Zoho email
        pass: process.env.PASS,    // Replace with your Zoho app-specific password
    },
});

// API endpoint to send emails
app.post('/send-emails', async (req, res) => {
    const { emails, subject } = req.body;

    if (!emails || !Array.isArray(emails) || !subject) {
        return res.status(400).json({ error: 'Please provide a list of emails' });
    }

    try {
        const emailPromises = emails.map(({ email, name }) => {
            const emailTemplate = ReplyToDevendraEmailTemplate(name);

            const mailOptions = {
                from: `Janakpur Hackathon <${process.env.USER}>`,    // Sender address
                to: email,
                subject,
                html: emailTemplate,
            };

            // Send email and return the promise
            return transporter.sendMail(mailOptions);
        });

        await Promise.all(emailPromises);
        res.json({ message: 'Emails sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send emails' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
