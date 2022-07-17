import { createQueryBuilder, EntityRepository, Repository } from 'typeorm';
import { Order } from '../domain/order.entity';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  // TODO: 판매된 상품들 중 여성 회원에게 판매된 횟수가 가장 많은 상품의 이름을 조회
  async findOneBestSellingProduct() {
    return await createQueryBuilder()
      .leftJoin('order.user', 'user')
      .leftJoin('order.product', 'product')
      .where('user.gender = :gender', { gender: 'female' })
      .select('COUNT(productName)')
      .from(Order, 'order')
      .groupBy('product.productName')
      .getRawOne();
  }

  // TODO: 3월 판매 총액이 가장 높은 상품을 조회
  async findOneHighestTotalSalesProduct() {
    return await createQueryBuilder()
      .leftJoin('order.product', 'product')
      .select('SUM(price)')
      .from(Order, 'order')
      .where('')
      .andWhere('order.createdAt >= from', { from: '2022-03-01' })
      .andWhere('order.createdAt <= to', { to: '2022-03-31' })
      .groupBy('product.id')
      .getRawOne();
  }
}
