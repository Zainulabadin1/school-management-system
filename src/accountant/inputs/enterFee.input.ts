import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class EnterFeeInput {
    @Field(() => ID)
    studentId: ObjectId

    @Field()
    monthlyFee: number

    @Field()
    Concession: number

    @Field()
    isPaid: boolean

    @Field()
    amountPaid: number

    @Field({nullable: true})
    date: Date
 
}
