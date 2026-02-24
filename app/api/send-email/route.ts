// api/send-email.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 10000,
});

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // reuse transporter
    await transporter.sendMail({
      from: `"Заявка с сайта" <${process.env.SMTP_USER}>`,
      to: 'vanya.zelenczov@mail.ru',
      subject: 'Новая заявка с сайта',
      html: `
        <h2>Новая заявка</h2>
        <p><b>Фамилия:</b> ${data.lastName}</p>
        <p><b>Имя:</b> ${data.firstName}</p>
        <p><b>Компания:</b> ${data.company}</p>
        <p><b>ИНН:</b> ${data.inn}</p>
        <p><b>Товары:</b> ${data.products?.join(', ')}</p>
        <p><b>Телефон:</b> ${data.phone}</p>
        <p><b>Email:</b> ${data.email}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
