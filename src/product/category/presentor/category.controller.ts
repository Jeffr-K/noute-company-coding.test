import { Body, Controller } from '@nestjs/common';
import { CreateCategoryDto } from './create-category.dto';

@Controller()
export class CategoryController {
  constructor() {}

  async create(@Body() data: CreateCategoryDto) {}
}
