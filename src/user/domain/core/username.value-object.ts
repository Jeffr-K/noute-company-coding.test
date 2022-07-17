
export type UsernameProps = { firstName: string, lastName: string }

export class Username {
  public firstName: string;
  public lastName: string;

  constructor(username: UsernameProps) {
    this.firstName = username.firstName;
    this.lastName = username.lastName;
  }
}