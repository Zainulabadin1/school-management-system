import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class PaperDto{
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