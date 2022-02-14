import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class markStudentAttendanceInput {
    @Field(() => ID)
    studentId: ObjectId

    @Field()
    isPresent: boolean

    @Field({ nullable: true })
    date: Date

}