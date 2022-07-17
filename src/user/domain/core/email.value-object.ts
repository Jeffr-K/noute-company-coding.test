
export type EmailProps = { email: string };

export class Email {
  public email: string;

  constructor(data: EmailProps) {
    this.email = data.email;
  }
}