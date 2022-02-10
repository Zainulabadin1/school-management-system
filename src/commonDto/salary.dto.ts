import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from 'mongoose';

@ObjectType()
export class SalaryDto{
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