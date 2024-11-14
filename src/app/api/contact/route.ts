import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});



export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'Нове повідомлення з сайту Web Red Cat',
      text: `Імʼя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nКоментар: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse('Failed to send message.', { status: 500 });
  }
}
