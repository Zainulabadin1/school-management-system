import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateFeeRecordInput {
    @Field(() => ID)
    _id: ObjectId

    @Field(() => ID, { nullable: true })
    studentId: ObjectId

    @Field({ nullable: true })
    monthlyFee: number

    @Field({ nullable: true })
    Concession: number

    @Field({ nullable: true })
    isPaid: boolean

    @Field({ nullable: true })
    amountPaid: number

    @Field({ nullable: true })
    date: Date

}
