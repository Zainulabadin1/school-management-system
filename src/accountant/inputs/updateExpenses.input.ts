import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateExpensesInput {
    @Field(() => ID)
    _id: ObjectId

    @Field({ nullable: true })
    expenseDetail: string

    @Field({ nullable: true })
    payingDate: Date

    @Field({ nullable: true })
    amountPaid: number

}
