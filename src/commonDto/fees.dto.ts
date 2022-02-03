import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class FeesDto{
    @Field()
    studentId: mongoose.Schema.Types.ObjectId

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