const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');


require('dotenv').config()




transporter = nodemailer.createTransport({
    host: 'ca9.toservers.com',
    port: process.env.MI_PORT,
    secure: true,
    auth: {
        user: 'formulario@francosalcedodev.online',
        pass: process.env.MI_CONTRA,
        
    },
    tls: {
        rejectUnauthorized: false
    }
});

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: process.env.MI_EMAIL,
        
        subject,
        
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });

}




module.exports = sendMail;