import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class StudentDto{
    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string

    @Field()
    gender: string

    @Field()
    religion: string

    @Field()
    dob: Date

    @Field()
    age: string

    @Field()
    address: string

    @Field()
    rollNumber: number

    @Field()
    class: number

    @Field()
    section: string

    @Field()
    isStudent: boolean

    @Field()
    joiningDate: Date

    @Field()
    parentId: mongoose.Schema.Types.ObjectId
    
}