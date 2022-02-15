import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class UpdateAssignmentMarksInput{
@Field(() => ID)
_id: ObjectId

    @Field(() => ID, {nullable: true})
    studentId: ObjectId

    @Field({nullable: true})
    assignmentNumber: number

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