import { AggregateRoot } from '../base/aggregate-root';
import { Gender, GenderProps } from './gender.value-object';
import { Address, AddressProps } from './address.value-object';
import { Email, EmailProps } from './email.value-object';
import { Password, PasswordProps } from './password.value-object';
import { Username, UsernameProps } from './username.value-object';

export type UserAggregateRootType = {
  username: UsernameProps;
  password: PasswordProps;
  email: EmailProps;
  address: AddressProps;
  gender: GenderProps;
};

export class User extends AggregateRoot {
  private readonly aggregateRootId: string;
  private readonly username: Username;
  private readonly password: Password;
  private readonly email: Email;
  private readonly address: Address;
  private readonly gender: Gender;

  constructor(user: UserAggregateRootType) {
    super();
    this.username = new Username(user.username);
    this.password = new Password(user.password);
    this.email = new Email(user.email);
    this.address = new Address(user.address);
    this.gender = new Gender(user.gender);
  }

  async register(): Promise<User> {
    const id = ''; // aggregateRootId 의 활용을 어떻게 해야할지 고민 중 입니다..
    const data: UserAggregateRootType = {
      username: this.username,
      password: this.password,
      email: this.email,
      address: this.address,
      gender: this.gender
    };
    const user = new User(data);
    return user;
    // mapper 를 활용해 Core domain -> entity model 로 변환 후, 이를 save 로직으로. 하지만 mapper 의 구현을 생각하지 못했습니다..
  }
}