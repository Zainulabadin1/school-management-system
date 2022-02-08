import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateTeacherInput {
    @Field(() => ID)
    _id: ObjectId

    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string

    @Field()
    contactNumber: number

    @Field()
    gender: string

    @Field()
    religion: string

    @Field()
    dob: Date

    @Field({nullable:true})
    age: number

    @Field()
    address: string

    @Field()
    employeeId: string

    @Field()
    salary: number

    @Field({ nullable: true })
    isTeacher: boolean
}
