import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class AssignmentMarksInput{
    @Field(() => ID)
    studentId: ObjectId

    @Field()
    assignmentNumber: number

    @Field()
    totalMarks: number

    @Field()
    isSubmitted: boolean

    @Field()
    obtainedMarks: number

    @Field()
    class: number

    @Field(() => ID)
    subject: ObjectId
}