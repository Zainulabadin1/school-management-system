import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class AssignmentDto {
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