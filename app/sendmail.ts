const nodemailer = require('nodemailer');

const handler = async (text: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Corrected port for Gmail SMTP
    secure: false,
    auth: {
      user: "noctis.hive@gmail.com",
      pass: "zyzu icce duqf nwyb",
    },
  });

  const to = "singhmanjot9922@gmail.com";
  const subject = "Regarding Portfolio query";

  try {
    const info = await transporter.sendMail({
      from: '"Manjot" <noctis.hive@gmail.com>', // Properly formatted sender
      to: to,
      subject: subject,
      text: text,
    });
    
    console.log("Message sent:", info.messageId);
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
};

export default handler;