import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ObjectID, UpdateResult } from "typeorm";
import { UpdateUser } from "./dto/user.update.dto";
import { IUser } from "./interface/user.interface";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('Users')
export class UserController{
    constructor(private readonly UserService : UserService){}
    @Get('getAll')
    async getAll():Promise<User[]>{
        return this.UserService.FindAll()
       //return this.UserService.Hello()
    }
    @Post('create')
    async create(@Body() newUser : IUser): Promise<User>{
        return this.UserService.create(newUser)
    }
    // @Put(':id')
    // async update(@Param('id') id : ObjectID, @Body() updateInput  : UpdateUser): Promise<UpdateResult>{
    //     console.log(updateInput)
    //    return this.UserService.update(id,updateInput)
    // }
    @Get(':id')
    async getUserByID(@Param('id') id : ObjectID):  Promise<User>{
        console.log(id)
        return this.UserService.FindByID(id)
    }

}