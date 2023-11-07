import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaModule } from './lista/lista.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type":"mysql",
      "host":"bdu5vcw5qynyytqgzwln-mysql.services.clever-cloud.com",
      "port":3306,
      "username":"uak6k0khry0lsmtu",
      "password":"vJklR0iMytDvLcoVNEw9",
      "database":"bdu5vcw5qynyytqgzwln",
      "entities":["dist/**/**.entity{.ts,.js}"],
      "synchronize":true
    }),
    
    ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
