const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (name, email, message) => {
  try {
    const msg = {
      to: process.env.EMAIL_FROM,
      from: process.env.EMAIL_FROM,
      subject: `New Portfolio Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await sgMail.send(msg);

    return true;
  } catch (error) {
    console.log("SendGrid Error:", error.response?.body || error);
    return false;
  }
};

module.exports = sendEmail;

// const nodemailer = require("nodemailer");

// const sendEmail = async (name, email, message) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });
//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: `New Contact Form Message from ${name}`,
//       html: `
//                 <h3>New Message from Portfolio</h3>
//                 <p><b>Name:</b> ${name}</p>
//                 <p><b>Email:</b> ${email}</p>
//                 <p><b>Message:</b> ${message}</p>
//             `,
//     };
//     await transporter.sendMail(mailOptions);

//     return true;
//   } catch (error) {
//     console.log("Email Error:", error);
//     return false;
//   }
// };

// module.exports = sendEmail;
