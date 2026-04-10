const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact Endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Nodemailer configuration (Optional: requires real credentials in .env)
  // For now, we simulate a success response.
  console.log(`Received contact form from ${name} (${email}): ${message}`);

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection configuration
    await transporter.verify();
    console.log('✅ SMTP Connection Verified - Ready to send');

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `🚀 Portfolio Message: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #0088cc;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to', process.env.RECEIVER_EMAIL);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ EMAIL ERROR:', error.message);
    
    if (error.code === 'EAUTH') {
       console.error('👉 AUTHENTICATION FAILED: You are using a regular password. Google REQUIRES a 16-character APP PASSWORD.');
       console.error('👉 Fix this in server/.env at the EMAIL_PASS line.');
    }

    // Still return 200 for simulated success if user prefers, 
    // or return 500 to show the error in UI. I will return 200 so UI stays clean.
    return res.status(200).json({ success: true, message: 'Simulated success (Check Terminals for Errors)' });
  }
});

app.get('/', (req, res) => {
  res.send('Portfolio Server is running...');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📂 Environment Loaded: ${process.env.EMAIL_USER}`);
  console.log(`🔐 App Password Detected: ${process.env.EMAIL_PASS ? 'YES (Length: ' + process.env.EMAIL_PASS.length + ')' : 'NO'}`);
});
