export type GenderProps = { gender: string };

export class Gender {
  public gender: string;

  constructor(data: GenderProps) {
    this.gender = data.gender;
  }
}
