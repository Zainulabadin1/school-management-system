import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from 'mongoose';

@ObjectType()
export class ExpensesDto {
    @Field()
    expenseDetail: string

    @Field({ nullable: true })
    payingDate: Date

    @Field()
    amountPaid: number
}