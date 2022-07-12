import { Injectable } from "@nestjs/common";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User{
   @ObjectIdColumn()
    _id : ObjectID

    @Column()
    name : string

    @Column()
    lastName : string

    @Column()
    email  : string

    @Column()
    
    telephone : string
}