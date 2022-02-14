import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateTeacherInput {
    @Field(() => ID)
    _id: ObjectId

    @Field({ nullable: true })
    name: string

    @Field({ nullable: true })
    email: string

    @Field({ nullable: true })
    password: string

    @Field({ nullable: true })
    contactNumber: number

    @Field({ nullable: true })
    gender: string

    @Field({ nullable: true })
    religion: string

    @Field({ nullable: true })
    dob: Date

    @Field({nullable:true})
    age: number

    @Field({ nullable: true })
    address: string

    @Field({ nullable: true })
    employeeId: string

    @Field({ nullable: true })
    salary: number

    @Field({ nullable: true })
    isTeacher: boolean
}
