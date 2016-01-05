export interface Message {
  replyTo?: string;
  to: string;
  subject: string;
  html: string;
}
