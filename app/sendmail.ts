const nodemailer = require('nodemailer');

const handler = async (text: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    }
  });

  const to = "singhmanjot9922@gmail.com";
  const subject = "Regarding Portfolio query";

  try {
    // Wrap the sendMail function in a promise
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: 'Your Portfolio',
          to,
          subject,
          text,
        },
        (error: any, info: any) => {
          if (error) {
            return reject(error);
          }
          resolve(info);
        }
      );
    });

    console.log('Email sent');
  } catch (error) {
    console.error(error);
  }
};

export default handler;
