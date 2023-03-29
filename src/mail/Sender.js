import nodemailer from 'nodemailer';

// Transporter
const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
});

// Send Mail
export const sendMail = async (to, subject, body) => {

    // Configuration
    const mailOptions = {
        from: 'support@althera-verse.com',
        to: to,
        subject: subject,
        html: body
    };

    // Send 
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error(error);
            return {
                status: 500,
                message: "Error sending Email"
            };
        } else {
            console.log('EMail sended:', info.response);
            return {
                status: 200,
                message: "EMail sended successfuly"
            };
        }
    });
}