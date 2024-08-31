// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'ennahcollins@gmail.com',
      subject: `New message from ${email}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}
