import { Field, ObjectType, ID } from "@nestjs/graphql";
import { ObjectId } from 'mongoose';

@ObjectType()
export class StudentDto {
    @Field()
    _id: string;

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

    @Field(() => ID)
    parentId: ObjectId

}