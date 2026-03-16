import type { ContactPayload, ApplicationPayload } from "./types";

export function contactTemplate(data: ContactPayload): {
  subject: string;
  text: string;
  html: string;
} {
  return {
    subject: `New Contact Message`,
    text: `Reason: ${data.reason}\n\nSubject: ${data.subject}\n\n${data.message}\n\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}`,
    html: `
      <h2 style="margin-bottom:4px">${data.subject}</h2>
      <p style="color:gray;margin-top:0">Reason: ${data.reason}</p>
      <p>${data.message}</p>
      <div style="margin-top:32px;padding:12px 16px;border:1px solid #ddd;border-radius:8px">
        <p style="margin:4px 0"><strong>Name:</strong> ${data.fullName}</p>
        <p style="margin:4px 0"><strong>Email:</strong> ${data.email}</p>
        <p style="margin:4px 0"><strong>Phone:</strong> ${data.phone}</p>
      </div>
      <p style="color:gray;font-style:italic;font-size:12px;margin-top:24px">~ Sent via the website contact form</p>
    `,
  };
}

export function applicationTemplate(data: ApplicationPayload): {
  subject: string;
  text: string;
  html: string;
} {
  const prior = data.workedWithUsBefore ? "Yes" : "No";
  return {
    subject: `New Application`,
    text: `Position: ${data.position}\nWorked with us before: ${prior}\n\n${data.message}\n\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}`,
    html: `
      <h2 style="margin-bottom:4px">Position: ${data.position}</h2>
      <p>${data.message}</p>
      <div style="margin-top:32px;padding:12px 16px;border:1px solid #ddd;border-radius:8px">
        <p style="margin:4px 0"><strong>Name:</strong> ${data.fullName}</p>
        <p style="margin:4px 0"><strong>Email:</strong> ${data.email}</p>
        <p style="margin:4px 0"><strong>Phone:</strong> ${data.phone}</p>
        <p style="margin:4px 0"><strong>Worked with us before:</strong> ${prior}</p>
      </div>
      <p style="color:gray;font-style:italic;font-size:12px;margin-top:24px">~ Sent via the website careers form</p>
    `,
  };
}
