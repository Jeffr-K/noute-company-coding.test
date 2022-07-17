import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'noute',
  synchronize: true,
  logging: true,
  extra: { ssl: { rejectUnauthorized: false } },
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
};
