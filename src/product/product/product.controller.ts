import { Body, Controller, Get, HttpCode, Inject, Post, Put, Query } from "@nestjs/common";
import { CreateProductDto } from './create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(ProductService) private readonly productService: ProductService,
  ) {}

  @Post()
  @HttpCode(204)
  async create(@Body() data: CreateProductDto) {
    try {
      await this.productService.createProduct(data);
    } catch (e) {
      console.log(e);
    }
  }

  @Get()
  @HttpCode(200)
  async getProduct(@Query('type') type: string) {
    try {
      const result = await this.productService.findRandomProductByCategory(type);
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  @Get()
  @HttpCode(200)
  async getProducts(): Promise<any> {
    try {
      const result = await this.productService.findProductsWithoutCondition();
      return result;
    } catch (e) {
      console.log(e);
    }
  }

}