import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class EnterExpenseInput {
    @Field()
    expenseDetail: string

    @Field({ nullable: true })
    payingDate: Date

    @Field()
    amountPaid: number

}
