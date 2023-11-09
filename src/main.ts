import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:['https://lista-back-vrqx.onrender.com'],
    methods:'GET,PUT,POST,DELETE,PATH',
    credentials:true
  })
  await app.listen(3000);
}
bootstrap();
