import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:['http://localhost:3001','https://lista-tarea-83ccb.web.app'],
    methods:'GET,PUT,POST,DELETE,PATH',
    credentials:true
  })
  await app.listen(3000);
}
bootstrap();
