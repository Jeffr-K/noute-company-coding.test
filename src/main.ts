import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'debug', 'warn']
  });
  await app.listen(3000, () => {
    console.log('server is running :3000');
  });
}
bootstrap();
