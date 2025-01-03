

import nodemailer from 'nodemailer';
const handler = async (text:string) => {


  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587, 
    secure: false,
    auth: {
      user: process.env.USER, 
      pass: process.env.PASS, 
    },
  });
const to="singhmanjot9922@gmail.com";
const subject="Regarding Portfolio query";
  try {
    // Send the email
    await transporter.sendMail({
      from: 'Your Portfolio ',
      to, 
      subject, 
      text, 
    });

    console.log('Email sent');
   
  } catch (error) {
    console.error(error);
    
}
};

export default handler;
