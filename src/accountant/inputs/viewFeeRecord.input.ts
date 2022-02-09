import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';



@InputType()
export class ViewFeeRecordInput {

    @Field(() => ID, { nullable: true })
    _id: ObjectId

    @Field(() => ID,{ nullable: true })
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