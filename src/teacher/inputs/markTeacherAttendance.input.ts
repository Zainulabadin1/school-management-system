import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class markTeacherAttendanceInput{
    @Field(()=> ID)
    teacherId: ObjectId

    @Field()
    isPresent: boolean

    @Field({nullable: true})
    date: Date
    
}