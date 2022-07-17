export type PasswordProps = { password: string };

export class Password {
  public password: string;

  constructor(data: PasswordProps) {
    this.password = data.password;
  }
}