import { Controller, Get, HttpCode, Inject } from '@nestjs/common';
import { UserService } from '../application/user.service';

@Controller('users')
export class UserController {
  constructor(@Inject(UserService) private userService: UserService) {}

  // @Get('/')
  // @HttpCode(200)
  // async getUsers() {
  //   try {} catch (e) {}
  // }
}