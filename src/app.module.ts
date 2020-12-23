import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicModule } from './modules/comic/comic.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comic } from './entities/comic.entity'
import { User } from './entities/user.entity';
import { UserComic } from './entities/userComic.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'comicsapp',
      entities: ['dist/entities/*.entity.js'],
      synchronize: true,//Para que todos los cambios se sincronicen con la BD
    }),
    ComicModule, 
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
