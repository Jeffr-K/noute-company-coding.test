import { Body, Controller, Get, HttpCode, Inject, Post } from '@nestjs/common';
import { UserCreateDto } from './user-create.dto';
import { UserService } from '../application/user.service';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post('/')
  @HttpCode(204)
  async create(@Body() data: UserCreateDto): Promise<void> {
    try {
      await this.userService.createUser(data);
    } catch (e) {
      console.log('error', e);
    }
  }

  @Get('/')
  async getUser() {
    try {
      const result = await this.userService.findOneByCountingPurchaseHistory();
      return result;
    } catch(e) {
      console.log(e);
    }
  }
}
