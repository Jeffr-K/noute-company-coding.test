import { createQueryBuilder, EntityRepository, Repository } from "typeorm";
import { Product } from "./product.entity";
import { Category } from "../category/category.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async insert(product: Product) {
    return await createQueryBuilder()
      .insert()
      .into(Product)
      .values(product)
      .execute();
  }

  // TODO: 특정 카테고리별 상품(목록)
  async findOneByCategoryType(categoryType: string) {
    return await createQueryBuilder()
      .leftJoinAndSelect('product.category', 'category')
      .where('category.type = :type', { type: categoryType })
      .select()
      .from(Product, 'product')
      .getMany();
  }

  // TODO: 각 카테고리별 상품을 1가지씩 랜덤으로 조회
  async findOneByCategoryId(categoryId: number) {
    return await createQueryBuilder()
      .select()
      .from(Product, 'product')
      .where(`category.id = :id`, { id: categoryId })
      .orderBy('RANDOM()')
      .limit(1)
      .getOne();
  }
}