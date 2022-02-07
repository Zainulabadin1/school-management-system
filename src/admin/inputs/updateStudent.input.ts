import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateStudentInput {
    @Field(() => ID)
    _id: ObjectId

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

    @Field({nullable: true})
    age: number

    @Field()
    address: string

    @Field()
    rollNumber: number

    @Field()
    class: number

    @Field()
    section: string

    @Field({nullable: true})
    isStudent: boolean

    @Field({nullable: true})
    joiningDate: Date

    @Field(() => ID, {nullable:true})
    parentId: ObjectId
  
}
