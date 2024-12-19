require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// Endpoint to send email
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure your Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider (e.g., Gmail, Outlook)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // Your recipient email address
      subject: `New Contact Form Submission from ${name}`,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send message');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
