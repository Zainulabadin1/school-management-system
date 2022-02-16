import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class PaperMarksInput{
    @Field(()=> ID)
    studentId: ObjectId

    @Field()
    class: number

    @Field(()=> ID)
    subject: ObjectId

    @Field()
    totalMarks: number

    @Field()
    obtainedMarks: number

    @Field()
    paperType: string

    @Field()
    isSubmitted: boolean
}