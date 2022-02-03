import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class FeesDto{
    @Field()
    studentId: mongoose.Schema.Types.ObjectId

    @Field()
    class: number

    @Field()
    subject: string

    @Field()
    totalMarks: number

    @Field()
    obtainedMarks: number

    @Field()
    paperType: string

    @Field()
    isSubmitted: boolean
}