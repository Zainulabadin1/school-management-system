import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateSalaryRecordInput {
    @Field(() => ID)
    _id: ObjectId

    @Field({ nullable: true })
    name: string

    @Field(() => ID, { nullable: true })
    teacherID: ObjectId

    @Field({ nullable: true })
    employeeId: string

    @Field({ nullable: true })
    salary: number

    @Field({ nullable: true })
    fine: number

    @Field({ nullable: true })
    payingDate: Date

    @Field({ nullable: true })
    isPaid: boolean

    @Field({nullable: true})
    amountPaid: number
    
}
