import nodemailer, { Transporter, SendMailOptions } from "nodemailer";

let transporter: Transporter;

export function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });
  }
  return transporter;
}

export async function sendMail(options: SendMailOptions) {
  return getTransporter().sendMail(options);
}
