// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      secure: false, // Use true for 465 port, false for other ports
      tls: {
        rejectUnauthorized: false, // To avoid SSL errors, though it's insecure, it might help in debugging.
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER, // Use your Gmail account here
      to: 'ennahcollins@gmail.com',
      subject: `New message from ${email}`,
      text: `Message from: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
