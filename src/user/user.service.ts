import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './user-create.dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: Repository<User>,
  ) {}

  async createUser(data: UserCreateDto) {
    const user = Object.assign(data);
    const result = await this.userRepository.insert(user);
    return result;
  }
}
