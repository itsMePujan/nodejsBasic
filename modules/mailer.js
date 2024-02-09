const nodemailer = require("nodemailer");

const transpoter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "02e18f1174beb4",
    pass: "44314095fa161e",
  },
});

const Mailer = async (email, subject) => {
  const info = await transpoter.sendMail({
    from: "Test Mailer", // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: "Hello world?", // plain text body
  });
  return info.messageId;
};

module.exports = { Mailer };
