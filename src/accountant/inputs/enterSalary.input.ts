import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class EnterSalaryInput {
    @Field()
    name: string

    @Field(()=> ID)
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

    @Field({nullable: true})
    amountPaid: number
 
}
