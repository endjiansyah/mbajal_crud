import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/users.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @Render('index')
    root() {
        return {};
    }

    @Post()
    createUser(@Body() request: CreateUserDto) {
        this.userService.createUser(request);
    }
}
