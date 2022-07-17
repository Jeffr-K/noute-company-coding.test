import { Module } from '@nestjs/common';
import { CategoryRepository } from './category/infrastructure/category.repository';

@Module({
  imports: [],
  providers: [CategoryRepository],
  controllers: []
})
export class ProductModule {}
