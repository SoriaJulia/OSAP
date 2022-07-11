import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  port: 465,
  host: 'mail.osap.com.ar',
  auth: {
    user: 'contacto@osap.com.ar',
    pass: process.env.TRANSPORTER_PASSWORD,
  },
  secure: true,
});
