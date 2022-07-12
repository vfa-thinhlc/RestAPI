import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ObjectID, Repository, UpdateResult } from "typeorm";
import { UpdateUser } from "./dto/user.update.dto";
import { IUser } from "./interface/user.interface";
import { User } from "./user.entity";

@Injectable()
export class UserService{
    constructor(@InjectRepository(User) private UserRepository : Repository<User>){}
    async FindAll() : Promise<User[]>
    {
        return this.UserRepository.find() 
    }
    async FindByID(id : ObjectID) : Promise<User>{
       // return this.UserRepository.findOne({ where : { _id : id} }    )
      return  this.UserRepository.findOneByOrFail({ _id : id})
       // return this.UserRepository.findByOne({_id : id})
    }
    Hello(){
        return 'Hello'
    }
    async create(newUser : IUser):Promise<User>{
        return this.UserRepository.save(newUser)
    }
    // async update(id : ObjectID, UpdateUser : UpdateUser): Promise<UpdateResult>{
    //     return this.UserRepository.update({ _id : id } ,{ lastName : UpdateUser.lastName , email : UpdateUser.email, telephone : UpdateUser.telephone})
    // }
}