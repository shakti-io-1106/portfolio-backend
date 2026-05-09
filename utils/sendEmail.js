const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (name, email, message) => {
  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      reply_to: email,

      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return true;
  } catch (error) {
    console.log("Resend Error:", error);

    return false;
  }
};

module.exports = sendEmail;
