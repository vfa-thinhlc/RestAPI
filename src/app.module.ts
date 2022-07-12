import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type : "mongodb",
    host : "localhost",
    port : 27017,
    database : "newDataBase",
    entities : [User],
    synchronize : true
  }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
