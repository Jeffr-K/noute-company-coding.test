import { Module } from "@nestjs/common";
import { CategoryRepository } from "./category/category.repository";


@Module({
  imports: [],
  providers: [CategoryRepository],
  controllers: [],
})
export class ProductModule {}