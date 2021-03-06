import { Field, ObjectType, ID } from "@nestjs/graphql";
import { ObjectId } from 'mongoose';

@ObjectType()
export class FeesDto{
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

    @Field()
    date: Date
}