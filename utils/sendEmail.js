const nodemailer = require("nodemailer");

const sendEmail = async (name, email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      html: `
                <h3>New Message from Portfolio</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b> ${message}</p>
            `,
    };
    await transporter.sendMail(mailOptions);

    return true;
  } catch (error) {
    console.log("Email Error:", error);
    return false;
  }
};

module.exports = sendEmail;
