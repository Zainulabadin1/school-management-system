import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateSalaryRecordInput {
    @Field(() => ID)
    _id: ObjectId

    @Field()
    name: string

    @Field(() => ID)
    teacherID: ObjectId

    @Field()
    employeeId: string

    @Field()
    salary: number

    @Field()
    fine: number

    @Field({ nullable: true })
    payingDate: Date

    @Field({ nullable: true })
    isPaid: boolean
    
}
