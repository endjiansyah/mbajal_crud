import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cs: ConfigService) => ({
        type: 'postgres',
        host: cs.get<string>('DB_HOST'),
        port: +cs.get<number>('DB_PORT'),
        username: cs.get('DB_USERNAME'),
        password: cs.get('DB_PASSWORD'),
        database: cs.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
