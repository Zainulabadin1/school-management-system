import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class QuizzesDto{
    @Field()
    studentId: mongoose.Schema.Types.ObjectId

    @Field()
    quizNumber: number

    @Field()
    totalMarks: number

    @Field()
    isSubmitted: boolean

    @Field()
    obtainedMarks: number

    @Field()
    class: number

    @Field()
    subject: mongoose.Schema.Types.ObjectId
}