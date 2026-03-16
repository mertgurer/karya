export type ContactPayload = {
  type: "contact";
  reason: string;
  fullName: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
};

export type ApplicationPayload = {
  type: "application";
  position: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  resumeBase64?: string;
  resumeFileName?: string;
  workedWithUsBefore: boolean;
};

export type MailPayload = ContactPayload | ApplicationPayload;
