import { createQueryBuilder, EntityRepository, Repository } from 'typeorm';
import { User } from '../domain/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async insert(data: User) {
    return await createQueryBuilder('user').insert().into(User).values(data).execute();
  }

  // TODO: 구매 횟수가 가장 적은 회원과 구매 총액이 가장 높은 회원의 이름을 각각 구하기 * 만약 동일 회원이라면 해당 회원의 이름을 조회
  async findOneByCountingPurchaseHistory() {
    return '';
  }
}
