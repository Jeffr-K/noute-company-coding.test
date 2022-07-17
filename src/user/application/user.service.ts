import { Injectable } from '@nestjs/common';
import { UserCreateDto } from '../presentor/user-create.dto';
import { UserRepository } from '../infrastructure/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../domain/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserRepository) private userRepository: Repository<User>) {}

  async createUser(data: UserCreateDto): Promise<void> {
    const user = Object.assign(data);
    await this.userRepository.insert(user);
  }

  async findOneByCountingPurchaseHistory() {
    return '';
  }
}
