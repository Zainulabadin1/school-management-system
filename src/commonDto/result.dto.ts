import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class ResultDto{
    @Field()
    studentId: mongoose.Schema.Types.ObjectId

    @Field()
    totalMarks: number

    @Field()
    obtainedMarks: number

    @Field()
    class: number

    @Field()
    subject: mongoose.Schema.Types.ObjectId

    @Field()
    percentage: number
}