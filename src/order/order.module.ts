import { Module } from '@nestjs/common';
import { OrderService } from './application/order.service';
import { OrderController } from './presentor/order.controller';
import { OrderRepository } from './infrastructure/order.repository';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository]
})
export class OrderModule {}