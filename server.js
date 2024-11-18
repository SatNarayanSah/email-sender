// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const sponsorsEmailTemplate = require('./email-templates/sponsorsEmailTemplate');
const createPdf = require('./utils/createAcceptanceEmailPdf');
const createPdfFromHtml = require('./utils/createAcceptanceEmailPdf');
const AcceptanceEmailTemplate = require('./email-templates/acceptance-email');

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
            const emailTemplate = sponsorsEmailTemplate();

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

app.post('/send-pdf', async (req, res) => {
    const { emails, subject } = req.body;

    if (!emails || !Array.isArray(emails) || !subject) {
        return res.status(400).json({ error: 'Please provide a list of emails' });
    }

    try {
        const emailPromises = emails.map(async ({ email, name }) => {
            const emailTemplate = AcceptanceEmailTemplate(name);
            const outputFilePath = `./pdf-templates/${name}-Hackathon-Acceptance-Letter.pdf`;

            await createPdfFromHtml(name, outputFilePath)

            const mailOptions = {
                from: `Janakpur Hackathon <${process.env.USER}>`,    // Sender address
                to: email,
                subject,
                html: emailTemplate,
                attachments: [
                    {
                        filename: `${name}-Hackathon-Acceptance-Letter.pdf`,
                        path: outputFilePath,
                    },
                    {
                        filename: 'Flyer.pdf', // Replace with the actual flyer file name
                        path: './assets/Selection Flyer.pdf', // Replace with the actual flyer file path
                    },
                ],
            };

            // Send email and return the promise
            return transporter.sendMail(mailOptions);
        });

        const results = await Promise.allSettled(emailPromises);

        const successes = results.filter(result => result.status === 'fulfilled').length;
        const failures = results.filter(result => result.status === 'rejected').map(result => result.reason);

        res.json({
            message: `Emails processed: ${successes} sent successfully, ${failures.length} failed.`,
            failures,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to Create Email' });
    }
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
