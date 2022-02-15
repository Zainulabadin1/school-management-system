import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class UpdateQuizMarksInput {
    @Field(() => ID)
    _id: ObjectId

    @Field(() => ID)
    studentId: ObjectId

    @Field({nullable: true})
    quizNumber: number

    @Field({nullable: true})
    totalMarks: number

    @Field({nullable: true})
    isSubmitted: boolean

    @Field({nullable: true})
    obtainedMarks: number

    @Field({nullable: true})
    class: number

    @Field(() => ID, {nullable: true})
    subject: ObjectId
}