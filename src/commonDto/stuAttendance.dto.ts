import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class StuAttendanceDto {
    @Field(() => ID)
    studentId: ObjectId

    @Field()
    isPresent: boolean

    @Field({ nullable: true })
    date: Date
}