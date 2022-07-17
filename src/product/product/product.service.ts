import { CreateProductDto } from './create-product.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.entity";
import { CategoryRepository } from "../category/category.repository";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository) private readonly productRepository: ProductRepository,
    @InjectRepository(CategoryRepository) private readonly categoryRepository: CategoryRepository
  ) {}

  async createProduct(data: CreateProductDto) {
    try {
      const product = Object.assign(data);
      await this.productRepository.insert(product);
    } catch (e) {
      console.log(e);
    }
  }

  async findRandomProductByCategory(type: string): Promise<Promise<Product>[]> {
    try {
      const categories = await this.categoryRepository.getCategories();
      const result = categories.map((category) => {
        return this.productRepository.findOneByCategoryId(category.id);
      });
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async findProductsWithoutCondition(): Promise<Product[]> {
    try {
      const products = await this.productRepository.find();
      return products;
    } catch (e) {
      console.log(e);
    }
  }


}