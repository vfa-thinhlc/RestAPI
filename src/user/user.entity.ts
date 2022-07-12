import { Injectable } from "@nestjs/common";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User{
   @ObjectIdColumn()
    id : ObjectID
    @Column()
    username : string
    @Column()
    password : string
   
}