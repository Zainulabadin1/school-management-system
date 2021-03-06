import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class QuizzesDto{
    @Field(()=> ID)
    studentId: ObjectId

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

    @Field(()=> ID)
    subject: ObjectId
}