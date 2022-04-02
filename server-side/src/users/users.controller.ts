import { Body, Controller, Get, Post, Delete, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/users.dto';
import { User } from './Schemas/users.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {
        console.log("kkkk")
    }

    @Get()
    getUsers(): Promise<User[]> {
        return this.UsersService.findAll();
    }

    @Post()
    createUsers(@Body() createUsersDto: CreateUsersDto): Promise<CreateUsersDto> {
        return this.UsersService.create(createUsersDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id) {
      return this.UsersService.delete(id);
    }

}
