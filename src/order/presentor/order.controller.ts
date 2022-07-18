import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto';

@Controller('order')
export class OrderController {
  constructor() {}

  @Post('/')
  @HttpCode(204)
  async create(@Body() data: CreateOrderDto) {}

  @Delete('/:id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {}

  @Put('/:id')
  @HttpCode(203)
  async modify(@Param() id: number) {}

  @Get('/:id')
  @HttpCode(200)
  async getOrder(@Param() id: number) {}

  @Get()
  @HttpCode(200)
  async getOrders() {}
}