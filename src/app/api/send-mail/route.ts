import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail/mailer";
import type { MailPayload } from "@/lib/mail/types";
import { applicationTemplate, contactTemplate } from "@/lib/mail/template";

export async function POST(req: Request) {
  try {
    const payload: MailPayload = await req.json();
    const to = payload.type === "contact" ? process.env.TO_CONTACT_EMAIL! : process.env.TO_CAREERS_EMAIL!;

    if (payload.type === "contact") {
      const { subject, text, html } = contactTemplate(payload);
      await sendMail({ from: `"${payload.fullName}" <${payload.email}>`, to, subject, text, html });
    } else if (payload.type === "application") {
      const { subject, text, html } = applicationTemplate(payload);

      const attachments = payload.resumeBase64
        ? [{ filename: payload.resumeFileName ?? "resume.pdf", content: Buffer.from(payload.resumeBase64, "base64") }]
        : [];

      await sendMail({ from: `"Applicant" <${payload.email}>`, to, subject, text, html, attachments });
    } else {
      return NextResponse.json({ success: false, message: "Unknown form type" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
