import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User]),],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule { }
