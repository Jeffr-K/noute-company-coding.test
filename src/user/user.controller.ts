import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { UserCreateDto } from './user-create.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post('/')
  @HttpCode(204)
  async create(
    @Body() data: UserCreateDto,
  ): Promise<{ message: string; result: any }> {
    console.log('data', data);
    try {
      const result = await this.userService.createUser(data);
      return { message: 'success', result: result };
    } catch (e) {
      console.log('error', e);
    }
  }
}
