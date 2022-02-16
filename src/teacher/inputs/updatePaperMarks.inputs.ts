import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class UpdatePaperMarksInput {
    @Field(() => ID)
    _id: ObjectId

    @Field(() => ID)
    studentId: ObjectId

    @Field({nullable: true})
    class: number

    @Field(() => ID,{nullable: true})
    subject: ObjectId

    @Field({nullable: true})
    totalMarks: number

    @Field({nullable: true})
    obtainedMarks: number

    @Field({nullable: true})
    paperType: string

    @Field({nullable: true})
    isSubmitted: boolean
}