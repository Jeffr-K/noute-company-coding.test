import { createQueryBuilder, EntityRepository, Repository } from "typeorm";
import { Category } from "./category.entity";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {

  async getCategories() {
    return await createQueryBuilder()
      .select('type')
      .from(Category, 'category')
      .getMany();
  }
}