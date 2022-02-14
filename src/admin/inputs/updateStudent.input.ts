import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateStudentInput {
    @Field(() => ID)
    _id: ObjectId

    @Field({ nullable: true })
    name: string

    @Field({ nullable: true })
    email: string

    @Field({ nullable: true })
    password: string

    @Field({ nullable: true })
    gender: string

    @Field({ nullable: true })
    religion: string

    @Field({ nullable: true })
    dob: Date

    @Field({nullable: true})
    age: number

    @Field({ nullable: true })
    address: string

    @Field({ nullable: true })
    rollNumber: number

    @Field({ nullable: true })
    class: number

    @Field({ nullable: true })
    section: string

    @Field({nullable: true})
    isStudent: boolean

    @Field({nullable: true})
    joiningDate: Date

    @Field(() => ID, {nullable:true})
    parentId: ObjectId
  
}
